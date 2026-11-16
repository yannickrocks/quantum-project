import { motion } from 'motion/react'
import './quantumPlanets.css'
import styles from './quantumPlanets.styles'

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
}: QuantumPlanetProps) => (
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
        <img className={styles.planets__moon} src={moonSrc} alt="QuantumMoon" />
      )}
    </motion.button>
  </li>
)

export default Planet
