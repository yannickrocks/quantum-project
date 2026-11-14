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
  <motion.li
    className={styles.li}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <figure className={styles.planets__figure} onClick={onPlanetCodeChange}>
      <img
        className={styles.planets__img}
        src={hasBeenClickedOn && answerSrc ? answerSrc : src}
        alt={planetId}
      />
      {hasBeenClickedOn && (
        <img className={styles.planets__moon} src={moonSrc} alt="QuantumMoon" />
      )}
    </figure>
  </motion.li>
)

export default Planet
