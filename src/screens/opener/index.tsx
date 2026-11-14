import FadeIn from '../../components/fade-in'
import Background from '../../assets/Misc/backgroundZaps.webp'
import Mask from '../../assets/Misc/Mask.webp'
import styles from './opener.styles'

type OpenerProps = {
  href: string
  alt: string
}

const Opener = ({ href, alt }: OpenerProps) => (
  <>
    <img className={styles.background} src={Background} alt="Background" />
    <FadeIn delay={600} transitionDuration={1000}>
      <div>
        <figure className={styles.opener__figure__mask}>
          <img
            className={styles.opener__figure__mask__img}
            src={Mask}
            alt={alt}
          />
        </figure>
        <div className={styles.opener__button}>
          <a className={styles.opener__button__a} href={href}>
            Wake up
          </a>
        </div>
      </div>
    </FadeIn>
  </>
)

export default Opener
