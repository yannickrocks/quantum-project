import FadeIn from 'react-fade-in'
import { HomePageText } from '../../utils/Constants'
import OuterWildsLogo from '../../assets/Misc/Outerwilds-Logo_web.png'
import React from 'react'
import styles from './homepage.styles'

const HomePage = () => {
  return (
    <FadeIn delay={600} transitionDuration={2000}>
      <div className={styles.homepage}>
        <figure className={styles.figureLogo}>
          <img
            className={styles.figureLogo__logo}
            src={OuterWildsLogo}
            alt="logo"
          />
        </figure>
        <h2 className={styles.welcomeText}>Welcome, Astronaut</h2>
        <p className={styles.description}>
          <br />
          {HomePageText.map((item) => (
            <>
              {item}
              <br />
              <br />
            </>
          ))}
        </p>
        <div className={styles.launch}>
          <a className={styles.launchButton} href="/22minutes">
            Launch
          </a>
        </div>
        <div className={styles.disclaimer}>
          <p className={styles.disclaimer__text}>
            All rights and credit go directly to its rightful owners, no
            copyright infringement intended.
          </p>
          <p className={styles.disclaimer__text}>
            © 2020 Mobius Digital, LLC. Published by Annapurna Interactive under
            exclusive license. All rights reserved.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export default HomePage
