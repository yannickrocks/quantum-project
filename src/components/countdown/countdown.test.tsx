import { act, render } from '@testing-library/react'
import { CookiesProvider } from 'react-cookie'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import CountDown from '.'

const setEndCookie = (msFromNow: number) => {
  document.cookie = `CountDownCrumble=${new Date(Date.now() + msFromNow).toISOString()}; path=/`
}

const renderCountDown = (onExpire: () => void) =>
  render(
    <CookiesProvider>
      <CountDown onExpire={onExpire} />
    </CookiesProvider>,
  )

describe('CountDown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    document.cookie =
      'CountDownCrumble=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    vi.useRealTimers()
  })

  it('calls onExpire once the remaining time runs out', () => {
    setEndCookie(2000)
    const onExpire = vi.fn()
    renderCountDown(onExpire)
    expect(onExpire).not.toHaveBeenCalled()
    for (let second = 0; second < 3; second++) {
      act(() => {
        vi.advanceTimersByTime(1000)
      })
    }
    expect(onExpire).toHaveBeenCalled()
  })

  it('does not call onExpire while time remains', () => {
    setEndCookie(60 * 60 * 1000)
    const onExpire = vi.fn()
    renderCountDown(onExpire)
    for (let second = 0; second < 3; second++) {
      act(() => {
        vi.advanceTimersByTime(1000)
      })
    }
    expect(onExpire).not.toHaveBeenCalled()
  })
})
