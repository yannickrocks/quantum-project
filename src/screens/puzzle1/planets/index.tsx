import React from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { PlanetList } from "src/assets/Planets/PlanetsList";

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
    <Col className="planets__planet" xs={2} key={planetId}>
      <Figure className="planets__figure">
        <Figure.Image
          className="planets__img"
          src={showPurplePlanet ? answerSrc : src}
        />
      </Figure>
      <div className="planets__div">
        <input
          id={planetId}
          className="planets__input"
          maxLength={4}
          pattern="[0-9]*"
          placeholder="0000"
          value={planetCode}
          onChange={handleChange}
        />
      </div>
    </Col>
  );
};

export default Planet;
