import React from "react";
import "./planets.css";

type PlanetProps = {
  src: string;
  answerSrc: string;
  planetId: string;
  planetCode: string;
  correctCode: string;
  onPlanetCodeChange(value: string): void;
};

const Planet: React.FC<PlanetProps> = ({
  src,
  answerSrc,
  planetId,
  planetCode,
  correctCode,
  onPlanetCodeChange,
}) => {
  const showPurplePlanet = planetCode === correctCode;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPlanetCodeChange(event.currentTarget.value);
  };

  return (
    <li key={planetId}>
      <figure className="puzzle1__planets__figure">
        <img
          className="puzzle1__planets__img"
          src={showPurplePlanet ? answerSrc : src}
          alt={planetId}
        />
      </figure>
      <input
        id={planetId}
        className="puzzle1__planets__input"
        maxLength={4}
        pattern="[0-9]*"
        placeholder="0000"
        value={planetCode}
        onChange={handleChange}
      />
    </li>
  );
};

export default Planet;
