import React from 'react';
import { WanderingMoonText } from '../../utils/Constants';
import PurpleNomai from '../../assets/Nomai/PurpleNomai.png';
import OrangeNomai from '../../assets/Nomai/OrangeNomai.png';
import styles from './nomaiText.styles';

const NomaiWithText = () => {
  return (
    <div className={styles.nomai__details}>
      <h2 className={styles.nomai__h2}>The Wandering Moon</h2>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={PurpleNomai}
          alt={PurpleNomai}
        />
        <br />
        {WanderingMoonText[0]}
        <br />
      </div>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={OrangeNomai}
          alt={OrangeNomai}
        />
        <br />
        {WanderingMoonText[1]}
        <br />
      </div>
      <div className={styles.nomai__details__row}>
        <img
          className={styles.nomai__details__img}
          src={PurpleNomai}
          alt={PurpleNomai}
        />
        <br />
        {WanderingMoonText[2]}
        <br />
      </div>
    </div>
  );
};

export default NomaiWithText;
