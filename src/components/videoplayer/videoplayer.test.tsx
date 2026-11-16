import { act, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import VideoPlayer from '.'

type PlayerEvents = {
  onReady(event: { target: { getPlayerState(): number } }): void
  onStateChange(event: { data: number }): void
  onError(): void
}

const playerState = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2 }
const youTubeApiUrl = 'https://www.youtube.com/iframe_api'

const renderEndingVideo = (onEnded: () => void) =>
  render(
    <VideoPlayer
      url="https://www.youtube.com/embed/x?autoplay=1"
      title="Ending video"
      onEnded={onEnded}
      fallbackEndMs={65_000}
    />,
  )

const flushPromises = () => act(async () => {})

describe('VideoPlayer end detection', () => {
  let events: PlayerEvents | undefined
  let attachedTo: unknown

  beforeEach(() => {
    vi.useFakeTimers()
    events = undefined
    attachedTo = undefined
    vi.stubGlobal('YT', {
      PlayerState: playerState,
      Player: class {
        constructor(element: unknown, options: { events: PlayerEvents }) {
          attachedTo = element
          events = options.events
        }
      },
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
    document
      .querySelectorAll(`script[src="${youTubeApiUrl}"]`)
      .forEach((script) => script.remove())
  })

  it('attaches the YouTube player to its own iframe, with the JS API enabled', async () => {
    const { container } = renderEndingVideo(vi.fn())
    await flushPromises()
    const iframe = container.querySelector('iframe')
    expect(attachedTo).toBe(iframe)
    expect(iframe?.getAttribute('src')).toBe(
      'https://www.youtube.com/embed/x?autoplay=1&enablejsapi=1',
    )
  })

  it('reports the end when the video finishes', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() => events!.onStateChange({ data: playerState.PLAYING }))
    act(() => events!.onStateChange({ data: playerState.ENDED }))
    expect(onEnded).toHaveBeenCalledTimes(1)
  })

  it('does not report the end at the fallback time once the video is playing', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() => events!.onStateChange({ data: playerState.PLAYING }))
    act(() => events!.onStateChange({ data: playerState.PAUSED }))
    act(() => {
      vi.advanceTimersByTime(200_000)
    })
    expect(onEnded).not.toHaveBeenCalled()
  })

  it('reports the end at the fallback time when the video never starts', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() => {
      vi.advanceTimersByTime(64_999)
    })
    expect(onEnded).not.toHaveBeenCalled()
    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(onEnded).toHaveBeenCalledTimes(1)
  })

  it('does not report the end at the fallback time when the video was already playing before the API attached', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() =>
      events!.onReady({
        target: { getPlayerState: () => playerState.PLAYING },
      }),
    )
    act(() => {
      vi.advanceTimersByTime(200_000)
    })
    expect(onEnded).not.toHaveBeenCalled()
  })

  it('keeps the fallback when the player is ready but has not started', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() =>
      events!.onReady({
        target: { getPlayerState: () => playerState.UNSTARTED },
      }),
    )
    act(() => {
      vi.advanceTimersByTime(65_000)
    })
    expect(onEnded).toHaveBeenCalledTimes(1)
  })

  it('reports the end when the player errors', async () => {
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    act(() => events!.onStateChange({ data: playerState.PLAYING }))
    act(() => events!.onError())
    expect(onEnded).toHaveBeenCalledTimes(1)
  })

  it('reports the end at the fallback time when the YouTube API cannot load', async () => {
    vi.stubGlobal('YT', undefined)
    const onEnded = vi.fn()
    renderEndingVideo(onEnded)
    await flushPromises()
    expect(document.querySelector(`script[src="${youTubeApiUrl}"]`)).not.toBe(
      null,
    )
    act(() => {
      vi.advanceTimersByTime(65_000)
    })
    expect(onEnded).toHaveBeenCalledTimes(1)
  })

  it('does not report the end after unmounting', async () => {
    const onEnded = vi.fn()
    const { unmount } = renderEndingVideo(onEnded)
    await flushPromises()
    unmount()
    act(() => {
      vi.advanceTimersByTime(65_000)
    })
    expect(onEnded).not.toHaveBeenCalled()
  })

  it('loads nothing from YouTube for videos without an end handler', async () => {
    vi.stubGlobal('YT', undefined)
    render(<VideoPlayer url="https://www.youtube.com/embed/x" title="Puzzle" />)
    await flushPromises()
    expect(document.querySelector(`script[src="${youTubeApiUrl}"]`)).toBe(null)
  })
})
