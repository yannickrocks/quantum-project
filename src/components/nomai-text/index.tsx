import { WanderingMoonText } from '../../utils/Constants'
import PurpleNomai from '../../assets/Nomai/PurpleNomai.webp'
import OrangeNomai from '../../assets/Nomai/OrangeNomai.webp'
import styles from './nomaiText.styles'

const NomaiWithText = () => {
  return (
    <div className={styles.nomai__details}>
      <h1 className={styles.nomai__h2}>The Wandering Moon</h1>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={PurpleNomai}
          alt="Purple Nomai"
        />
        <br />
        {WanderingMoonText[0]}
        <br />
      </div>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={OrangeNomai}
          alt="Orange Nomai"
        />
        <br />
        {WanderingMoonText[1]}
        <br />
      </div>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={PurpleNomai}
          alt="Purple Nomai"
        />
        <br />
        {WanderingMoonText[2]}
        <br />
      </div>
    </div>
  )
}

export default NomaiWithText
