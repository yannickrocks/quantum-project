import { motion } from 'motion/react'
import './quantumPlanets.css'
import styles from './quantumPlanets.styles'

type QuantumPlanetProps = {
  src: string
  answerSrc?: string
  correctCode?: string
  planetId: string
  hasBeenClickedOn: boolean
  greyQuantumMoon?: string
  purpleQuantumMoon?: string
  pageAorB: string
  onPlanetCodeChange(): void
}

const Planet = ({
  src,
  answerSrc,
  planetId,
  hasBeenClickedOn,
  greyQuantumMoon,
  purpleQuantumMoon,
  pageAorB,
  onPlanetCodeChange,
}: QuantumPlanetProps) => {
  const isPageA = pageAorB === 'pageA'

  return (
    <motion.li
      className={styles.li}
      key={planetId}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPageA ? (
        <figure className={styles.planets__figure} onClick={onPlanetCodeChange}>
          <img className={styles.planets__img} src={src} alt={planetId} />
          {hasBeenClickedOn ? (
            <img
              className={styles.planets__moon}
              src={greyQuantumMoon}
              alt="QuantumMoon"
            />
          ) : (
            ''
          )}
        </figure>
      ) : (
        <figure className={styles.planets__figure} onClick={onPlanetCodeChange}>
          <img
            className={styles.planets__img}
            src={hasBeenClickedOn ? answerSrc : src}
            alt={planetId}
          />
          {hasBeenClickedOn ? (
            <img
              className={styles.planets__moon}
              src={purpleQuantumMoon}
              alt={'QuantumMoon'}
            />
          ) : (
            ''
          )}
        </figure>
      )}
    </motion.li>
  )
}

export default Planet
