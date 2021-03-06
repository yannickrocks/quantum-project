import React from 'react'
import FadeIn from 'react-fade-in'
import Background from '../../../assets/Misc/backgroundZaps.png'
import Mask from '../../../assets/Misc/Mask.png'
import styles from './opener.styles'

const Puzzle2Opener = () => {
  return (
    <>
      <img className={styles.background} src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={1000}>
        <div>
          <figure className={styles.puzzle2__figure__mask}>
            <img
              className={styles.puzzle2__figure__mask__img}
              src={Mask}
              alt="Mask Puzzle 2"
            />
          </figure>
          <div className={styles.puzzle2__opener__button}>
            <a
              className={styles.puzzle2__opener__button__a}
              href="/wanderingmoon"
            >
              Wake up
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Puzzle2Opener
