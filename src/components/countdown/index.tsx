import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import styles from './countdown.styles'

type CountDownProps = {
  onExpire(): void
}

const countdownDurationMs = 22 * 60 * 60 * 1000

const pad = (value: number) => value.toString().padStart(2, '0')

const CountDown = ({ onExpire }: CountDownProps) => {
  const [hours, setHours] = useState('22')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [endCookie, setEndCookie] = useCookies(['CountDownCrumble'])

  const addNewCookieOrSetTimer = () => {
    if (Object.keys(endCookie).length !== 0) {
      const remainingSeconds = Math.max(
        0,
        Math.floor(
          (new Date(endCookie['CountDownCrumble']).getTime() - Date.now()) /
            1000,
        ),
      )

      setHours(pad(Math.floor(remainingSeconds / 3600)))
      setMinutes(pad(Math.floor((remainingSeconds % 3600) / 60)))
      setSeconds(pad(remainingSeconds % 60))
    } else {
      const cookieExpires = new Date(Date.now() + countdownDurationMs)

      setEndCookie('CountDownCrumble', cookieExpires, {
        path: '/finalvoyage',
        expires: cookieExpires,
      })
    }
  }

  useEffect(addNewCookieOrSetTimer, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const secondsInNumber = parseInt(seconds)
      if (secondsInNumber > 0) {
        if (secondsInNumber < 11) {
          const allowZeroLead = (secondsInNumber - 1)
            .toString()
            .padStart(2, '0')
          setSeconds(allowZeroLead)
        } else {
          setSeconds((secondsInNumber - 1).toString())
        }
      }

      if (secondsInNumber === 0) {
        const minutesInNumber = parseInt(minutes)
        const hoursInNumber = parseInt(hours)
        if (minutesInNumber === 0 && hoursInNumber === 0) {
          clearInterval(timer)
        } else {
          if (minutesInNumber === 0 && hoursInNumber > 0) {
            setMinutes('59')
            setHours((hoursInNumber - 1).toString().padStart(2, '0'))
          } else if (minutesInNumber < 11) {
            setMinutes((minutesInNumber - 1).toString().padStart(2, '0'))
          } else {
            setMinutes((minutesInNumber - 1).toString())
          }
          setSeconds('59')
        }
      }
    }, 1000)
    if (hours + minutes + seconds === '000000') onExpire()
    return () => clearInterval(timer)
  }, [hours, minutes, seconds, onExpire])

  return (
    <>
      <div className={styles.timer}>
        {hours}:{minutes}
      </div>
    </>
  )
}

export default CountDown
