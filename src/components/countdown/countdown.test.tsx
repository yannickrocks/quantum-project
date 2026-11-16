import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import CountDown from '.'

const cookieName = 'CountDownCrumble'

const setEndCookie = (msFromNow: number) => {
  document.cookie = `${cookieName}=${new Date(Date.now() + msFromNow).toISOString()}; path=/`
}

const renderCountDown = (onExpire: () => void) =>
  render(<CountDown onExpire={onExpire} />)

const readEndCookie = () => {
  const entry = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${cookieName}=`))
  return entry && decodeURIComponent(entry.slice(cookieName.length + 1))
}

const expectEndCookieWritten = () => {
  const storedEndTime = new Date(JSON.parse(readEndCookie() as string))
  expect(
    Math.abs(storedEndTime.getTime() - Date.now() - 22 * 60 * 60 * 1000),
  ).toBeLessThan(5000)
}

const tick = (seconds: number) => {
  for (let second = 0; second < seconds; second++) {
    act(() => {
      vi.advanceTimersByTime(1000)
    })
  }
}

describe('CountDown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    window.history.pushState({}, '', '/finalvoyage')
  })

  afterEach(() => {
    document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    document.cookie = `${cookieName}=; path=/finalvoyage; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    document.cookie = 'foo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    vi.useRealTimers()
  })

  it('calls onExpire once the remaining time runs out', () => {
    setEndCookie(2000)
    const onExpire = vi.fn()
    renderCountDown(onExpire)
    expect(onExpire).not.toHaveBeenCalled()
    tick(3)
    expect(onExpire).toHaveBeenCalledTimes(1)
  })

  it('does not call onExpire while time remains', () => {
    setEndCookie(60 * 60 * 1000)
    const onExpire = vi.fn()
    renderCountDown(onExpire)
    tick(3)
    expect(onExpire).not.toHaveBeenCalled()
  })

  it('shows 22:00 and writes the end cookie on a first visit', () => {
    renderCountDown(vi.fn())
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expectEndCookieWritten()
  })

  it('shows 22:00 on a first visit when a foreign cookie exists', () => {
    document.cookie = 'foo=1; path=/'
    renderCountDown(vi.fn())
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expect(screen.queryByText(/NaN/)).toBeNull()
    expectEndCookieWritten()
  })

  it('treats an invalid end cookie as missing', () => {
    document.cookie = `${cookieName}=garbage; path=/`
    renderCountDown(vi.fn())
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expectEndCookieWritten()
  })

  it('treats an end cookie with a malformed percent sequence as missing', () => {
    document.cookie = `${cookieName}=%E0%A4%A; path=/`
    renderCountDown(vi.fn())
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expectEndCookieWritten()
  })

  it('renders the remaining time from the cookie on first paint', () => {
    setEndCookie(5 * 60 * 60 * 1000 + 30 * 60 * 1000)
    renderCountDown(vi.fn())
    expect(screen.getByText('05:30')).toBeInTheDocument()
  })

  it('honours an end cookie written in the old react-cookie format', () => {
    const endTime = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString()
    document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(endTime))}; path=/`
    renderCountDown(vi.fn())
    expect(screen.getByText('03:00')).toBeInTheDocument()
    expect(readEndCookie()).toBe(JSON.stringify(endTime))
  })

  it('writes the end cookie in the old react-cookie format', () => {
    renderCountDown(vi.fn())
    expect(document.cookie).toMatch(new RegExp(`${cookieName}=%22[^;]+Z%22`))
  })

  it('calls onExpire for an already expired cookie', () => {
    setEndCookie(-5000)
    const onExpire = vi.fn()
    renderCountDown(onExpire)
    tick(1)
    expect(onExpire).toHaveBeenCalledTimes(1)
  })

  it('follows Date.now after a long gap', () => {
    setEndCookie(3 * 60 * 60 * 1000)
    renderCountDown(vi.fn())
    expect(screen.getByText('03:00')).toBeInTheDocument()
    vi.setSystemTime(Date.now() + 2 * 60 * 60 * 1000)
    tick(1)
    expect(screen.getByText('00:59')).toBeInTheDocument()
  })

  it('keeps the interval and calls the latest onExpire after a rerender', () => {
    setEndCookie(2000)
    const firstOnExpire = vi.fn()
    const secondOnExpire = vi.fn()
    const { rerender } = renderCountDown(firstOnExpire)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    rerender(<CountDown onExpire={secondOnExpire} />)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(firstOnExpire).not.toHaveBeenCalled()
    expect(secondOnExpire).toHaveBeenCalledTimes(1)
  })
})
