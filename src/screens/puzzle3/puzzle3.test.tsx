import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Puzzle3 from '.'
import { CorrectWarpList } from '../../utils/WarpLists'
import LaunchGif from '../../assets/Warp-Purples/launch.webp'

const mocks = vi.hoisted(() => ({
  navigate: vi.fn(),
  play: vi.fn(),
  mutedStateAtEachPlay: [] as boolean[],
  preloadedSources: [] as string[],
  isCountdownExpired: { current: false },
}))

vi.mock('react-router', async (importOriginal) => ({
  ...(await importOriginal<typeof import('react-router')>()),
  useNavigate: () => mocks.navigate,
}))

vi.mock('../../components/countdown', async () => {
  const { useEffect } = await import('react')
  return {
    default: ({ onExpire }: { onExpire(): void }) => {
      useEffect(() => {
        if (mocks.isCountdownExpired.current) onExpire()
      }, [onExpire])
      return null
    },
  }
})

const fillWarps = (counts = [1, 1, 1]) => {
  const warps = [1, 2, 3].map((number) =>
    screen.getByRole('button', { name: `Warp ${number}` }),
  )
  warps.forEach((warp, index) => {
    for (let click = 0; click < counts[index]; click++) fireEvent.click(warp)
  })
  return warps
}

const launch = () => {
  fireEvent.click(screen.getByAltText('Launch 1'))
  act(() => {
    vi.advanceTimersByTime(5000)
  })
}

describe('Puzzle3', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mocks.navigate.mockClear()
    mocks.play.mockReset()
    mocks.play.mockResolvedValue(undefined)
    mocks.mutedStateAtEachPlay.length = 0
    mocks.preloadedSources.length = 0
    mocks.isCountdownExpired.current = false
    vi.stubGlobal(
      'Audio',
      class {
        volume = 1
        muted = false
        currentTime = 0
        play() {
          mocks.mutedStateAtEachPlay.push(this.muted)
          return mocks.play()
        }
      },
    )
    vi.stubGlobal(
      'Image',
      class {
        set src(value: string) {
          mocks.preloadedSources.push(value)
        }
      },
    )
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('navigates to /terriblefate when the countdown reaches zero', () => {
    mocks.isCountdownExpired.current = true
    render(<Puzzle3 />)
    expect(mocks.navigate).toHaveBeenCalledWith('/terriblefate')
    expect(mocks.navigate).not.toHaveBeenCalledWith('/failure')
  })

  it('navigates once and plays sound once when Launch is clicked twice', () => {
    render(<Puzzle3 />)
    fillWarps()
    fireEvent.click(screen.getByAltText('Launch 1'))
    fireEvent.click(screen.getByAltText('Launch 1'))
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(
      mocks.mutedStateAtEachPlay.filter((isMuted) => !isMuted),
    ).toHaveLength(1)
    expect(mocks.navigate).toHaveBeenCalledTimes(1)
  })

  it('unlocks the warp sound silently inside the launch click, for iOS', () => {
    render(<Puzzle3 />)
    fillWarps()
    fireEvent.click(screen.getByAltText('Launch 1'))
    expect(mocks.mutedStateAtEachPlay).toEqual([true])
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(mocks.mutedStateAtEachPlay).toEqual([true, false])
  })

  it('still lands on an ending when the browser blocks the sound', async () => {
    mocks.play.mockImplementation(() =>
      Promise.reject(new DOMException('blocked', 'NotAllowedError')),
    )
    render(<Puzzle3 />)
    fillWarps(CorrectWarpList)
    launch()
    await act(async () => {})
    expect(mocks.navigate).toHaveBeenCalledWith('/consciousobserver')
  })

  it('keeps the launch gif after a second click', () => {
    render(<Puzzle3 />)
    fillWarps()
    fireEvent.click(screen.getByAltText('Launch 1'))
    const gifSrc = screen.getByAltText('Launch 1').getAttribute('src')
    fireEvent.click(screen.getByAltText('Launch 1'))
    expect(screen.getByAltText('Launch 1').getAttribute('src')).toBe(gifSrc)
  })

  it('does not navigate after unmount', () => {
    const { unmount } = render(<Puzzle3 />)
    fillWarps()
    fireEvent.click(screen.getByAltText('Launch 1'))
    unmount()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(mocks.navigate).not.toHaveBeenCalled()
    expect(mocks.mutedStateAtEachPlay).toEqual([true])
  })

  it('navigates to /consciousobserver when the warps are correct', () => {
    render(<Puzzle3 />)
    fillWarps(CorrectWarpList)
    launch()
    expect(mocks.navigate).toHaveBeenCalledWith('/consciousobserver')
    expect(mocks.navigate).toHaveBeenCalledTimes(1)
  })

  it('navigates to /terriblefate when the warps are wrong', () => {
    render(<Puzzle3 />)
    fillWarps([20, 26, 14])
    launch()
    expect(mocks.navigate).toHaveBeenCalledWith('/terriblefate')
    expect(mocks.navigate).toHaveBeenCalledTimes(1)
  })

  it('does not launch while a warp is still empty', () => {
    render(<Puzzle3 />)
    fillWarps([20, 0, 13])
    launch()
    expect(mocks.navigate).not.toHaveBeenCalled()
    expect(screen.getByAltText('Launch 1').getAttribute('src')).not.toBe(
      LaunchGif,
    )
  })

  it('preloads the launch animation on mount', () => {
    render(<Puzzle3 />)
    expect(mocks.preloadedSources).toContain(LaunchGif)
  })
})
