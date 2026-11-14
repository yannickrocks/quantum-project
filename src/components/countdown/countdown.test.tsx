import { act, render, screen } from '@testing-library/react'
import { Cookies, CookiesProvider } from 'react-cookie'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockInstance,
} from 'vitest'
import CountDown from '.'

const cookieName = 'CountDownCrumble'

const setEndCookie = (msFromNow: number) => {
  document.cookie = `${cookieName}=${new Date(Date.now() + msFromNow).toISOString()}; path=/`
}

const renderCountDown = (onExpire: () => void, cookies = new Cookies()) =>
  render(
    <CookiesProvider cookies={cookies}>
      <CountDown onExpire={onExpire} />
    </CookiesProvider>,
  )

const expectEndCookieWritten = (setSpy: MockInstance) => {
  expect(setSpy).toHaveBeenCalledTimes(1)
  const [name, value, options] = setSpy.mock.calls[0]
  expect(name).toBe(cookieName)
  expect(
    Math.abs(value.getTime() - Date.now() - 22 * 60 * 60 * 1000),
  ).toBeLessThan(5000)
  expect(options.path).toBe('/finalvoyage')
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
    const cookies = new Cookies()
    const setSpy = vi.spyOn(cookies, 'set')
    renderCountDown(vi.fn(), cookies)
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expectEndCookieWritten(setSpy)
  })

  it('shows 22:00 on a first visit when a foreign cookie exists', () => {
    document.cookie = 'foo=1; path=/'
    const cookies = new Cookies()
    const setSpy = vi.spyOn(cookies, 'set')
    renderCountDown(vi.fn(), cookies)
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expect(screen.queryByText(/NaN/)).toBeNull()
    expectEndCookieWritten(setSpy)
  })

  it('treats an invalid end cookie as missing', () => {
    document.cookie = `${cookieName}=garbage; path=/`
    const cookies = new Cookies()
    const setSpy = vi.spyOn(cookies, 'set')
    renderCountDown(vi.fn(), cookies)
    expect(screen.getByText('22:00')).toBeInTheDocument()
    expectEndCookieWritten(setSpy)
  })

  it('renders the remaining time from the cookie on first paint', () => {
    setEndCookie(5 * 60 * 60 * 1000 + 30 * 60 * 1000)
    renderCountDown(vi.fn())
    expect(screen.getByText('05:30')).toBeInTheDocument()
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
    rerender(
      <CookiesProvider>
        <CountDown onExpire={secondOnExpire} />
      </CookiesProvider>,
    )
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(firstOnExpire).not.toHaveBeenCalled()
    expect(secondOnExpire).toHaveBeenCalledTimes(1)
  })
})
