import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Puzzle3 from '.'

const mocks = vi.hoisted(() => ({
  navigate: vi.fn(),
  play: vi.fn(),
  isCountdownExpired: { current: false },
}))

vi.mock('react-router', async (importOriginal) => ({
  ...(await importOriginal<typeof import('react-router')>()),
  useNavigate: () => mocks.navigate,
}))

vi.mock('use-sound', () => ({ default: () => [mocks.play] }))

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

const fillWarps = () => {
  const warps = screen.getAllByRole('listitem').slice(0, 3)
  warps.forEach((warp) => fireEvent.click(warp))
  return warps
}

describe('Puzzle3', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mocks.navigate.mockClear()
    mocks.play.mockClear()
    mocks.isCountdownExpired.current = false
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders without key warnings', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<Puzzle3 />)
    const keyWarnings = errorSpy.mock.calls.filter((call) =>
      String(call[0]).includes('unique "key"'),
    )
    errorSpy.mockRestore()
    expect(keyWarnings).toHaveLength(0)
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
    const launch = screen.getByAltText('Launch 1')
    fireEvent.click(launch)
    fireEvent.click(screen.getByAltText('Launch 1'))
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(mocks.play).toHaveBeenCalledTimes(1)
    expect(mocks.navigate).toHaveBeenCalledTimes(1)
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
    expect(mocks.play).not.toHaveBeenCalled()
  })
})
