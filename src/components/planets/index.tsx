import React from 'react'
import styles from './planets.style'

type PlanetProps = {
  standard: string
  answerSrc: string
  planetId: string
  planetCode: string
  correctCode: string
  onPlanetCodeChange(value: string): void
}

const Planet = ({
  standard,
  answerSrc,
  planetId,
  planetCode,
  correctCode,
  onPlanetCodeChange,
}: PlanetProps) => {
  const showPurplePlanet = planetCode === correctCode
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPlanetCodeChange(event.currentTarget.value)
  }

  return (
    <li className={styles.li} key={planetId}>
      <figure className={styles.puzzle1__planets__figure}>
        <img
          className={styles.puzzle1__planets__img}
          src={showPurplePlanet ? answerSrc : standard}
          alt={planetId}
        />
      </figure>
      <input
        id={planetId}
        className={styles.puzzle1__planets__input}
        maxLength={4}
        pattern="[0-9]*"
        placeholder="0000"
        value={planetCode}
        onChange={handleChange}
      />
    </li>
  )
}

export default Planet
