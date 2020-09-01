import React from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

type PlanetProps = {
  src: string;
  answerSrc: string;
  planetId: string;
  planetCode: string;
  correctCode: string;
  name: string;
  onPlanetCodeChange(value: string): void;
};

const Planet: React.FC<PlanetProps> = ({
  src,
  answerSrc,
  planetId,
  planetCode,
  correctCode,
  name,
  onPlanetCodeChange,
}) => {
  const showPurplePlanet = planetCode === correctCode;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPlanetCodeChange(event.currentTarget.value);
  };

  return (
    <Col xs={8} md={6} className={name + "__planets__planet"} key={planetId}>
      <Figure className={name + "__planets__figure"}>
        <Figure.Image
          className={name + "__planets__img"}
          src={showPurplePlanet ? answerSrc : src}
        />
      </Figure>
      <div className={name + "__planets__div"}>
        <input
          id={planetId}
          className={name + "__planets__input"}
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
