import { useEffect, useRef, useState } from 'react'
import styles from './countdown.styles'

type CountDownProps = {
  onExpire(): void
}

const cookieName = 'CountDownCrumble'
const countdownDurationMs = 22 * 60 * 60 * 1000

const readEndTime = () => {
  const entry = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${cookieName}=`))
  if (!entry) return NaN
  const raw = entry.slice(cookieName.length + 1)
  try {
    const decoded = decodeURIComponent(raw)
    try {
      return new Date(JSON.parse(decoded)).getTime()
    } catch {
      return new Date(decoded).getTime()
    }
  } catch {
    return NaN
  }
}

const writeEndTime = (endTime: number) => {
  const expires = new Date(endTime)
  document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(expires))}; path=/finalvoyage; expires=${expires.toUTCString()}`
}

const pad = (value: number) => value.toString().padStart(2, '0')

const CountDown = ({ onExpire }: CountDownProps) => {
  const [{ endTime, isFirstVisit }] = useState(() => {
    const storedEndTime = readEndTime()
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
      writeEndTime(endTime)
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
