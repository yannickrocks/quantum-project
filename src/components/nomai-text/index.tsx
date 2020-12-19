import React from "react";
import { WanderingMoonText } from "../../utils/Constants";
import PurpleNomai from "../../assets/Nomai/PurpleNomai.png";
import OrangeNomai from "../../assets/Nomai/OrangeNomai.png";

const NomaiWithText = () => {
  return (
    <div className="puzzle2__details">
      <h2>The Wandering Moon</h2>
      <div className="puzzle2__details--row">
        <img src={PurpleNomai} alt={PurpleNomai} />
        <br />
        {WanderingMoonText[0]}
        <br />
      </div>
      <div className="puzzle2__details--row">
        <img src={OrangeNomai} alt={OrangeNomai} />
        <br />
        {WanderingMoonText[1]}
        <br />
      </div>
      <div className="puzzle2__details--row">
        <img src={PurpleNomai} alt={PurpleNomai} />
        <br />
        {WanderingMoonText[2]}
        <br />
      </div>
    </div>
  );
};

export default NomaiWithText;
