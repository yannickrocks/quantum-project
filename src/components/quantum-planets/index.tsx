import { motion, useReducedMotion } from 'motion/react'
import './quantumPlanets.css'
import styles from './quantumPlanets.styles'

const flickeringMoon = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 0.3, 1] },
  transition: { duration: 0.28, ease: 'linear' as const },
}

const fadingMoon = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.15 },
}

type QuantumPlanetProps = {
  src: string
  answerSrc?: string
  planetId: string
  hasBeenClickedOn: boolean
  moonSrc: string
  onPlanetCodeChange(): void
}

const Planet = ({
  src,
  answerSrc,
  planetId,
  hasBeenClickedOn,
  moonSrc,
  onPlanetCodeChange,
}: QuantumPlanetProps) => {
  const moonArrival = useReducedMotion() ? fadingMoon : flickeringMoon

  return (
    <li className={styles.li}>
      <motion.button
        type="button"
        className={styles.planets__button}
        aria-label={planetId}
        onClick={onPlanetCodeChange}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          className={styles.planets__img}
          src={hasBeenClickedOn && answerSrc ? answerSrc : src}
          alt={planetId}
        />
        {hasBeenClickedOn && (
          <motion.img
            className={styles.planets__moon}
            src={moonSrc}
            alt="QuantumMoon"
            {...moonArrival}
          />
        )}
      </motion.button>
    </li>
  )
}

export default Planet
