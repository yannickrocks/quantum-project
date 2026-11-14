import { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import styles from './countdown.styles'

type CountDownProps = {
  onExpire(): void
}

const cookieName = 'CountDownCrumble'
const countdownDurationMs = 22 * 60 * 60 * 1000

const pad = (value: number) => value.toString().padStart(2, '0')

const CountDown = ({ onExpire }: CountDownProps) => {
  const [endCookie, setEndCookie] = useCookies([cookieName])
  const [{ endTime, isFirstVisit }] = useState(() => {
    const storedEndTime = new Date(endCookie.CountDownCrumble).getTime()
    return Number.isNaN(storedEndTime)
      ? { endTime: Date.now() + countdownDurationMs, isFirstVisit: true }
      : { endTime: storedEndTime, isFirstVisit: false }
  })
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, endTime - Date.now()),
  )
  const onExpireRef = useRef(onExpire)

  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  useEffect(() => {
    if (isFirstVisit) {
      const expires = new Date(endTime)
      setEndCookie(cookieName, expires, { path: '/finalvoyage', expires })
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now())
      setRemainingMs(remaining)
      if (remaining === 0) {
        clearInterval(timer)
        onExpireRef.current()
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [endTime])

  const remainingSeconds = Math.floor(remainingMs / 1000)

  return (
    <div className={styles.timer}>
      {pad(Math.floor(remainingSeconds / 3600))}:
      {pad(Math.floor((remainingSeconds % 3600) / 60))}
    </div>
  )
}

export default CountDown
