import React from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

type QuantumPlanetProps = {
  src: string;
  answerSrc: string;
  correctCode?: string;
  planetId: string;
  name: string;
  hasBeenClickedOn: boolean;
  greyQuantumMoon: string;
  purpleQuantumMoon: string;
  onPlanetCodeChange(index: string): void;
};

const Planet: React.FC<QuantumPlanetProps> = ({
  src,
  answerSrc,
  planetId,
  hasBeenClickedOn,
  greyQuantumMoon,
  purpleQuantumMoon,
  name,
  onPlanetCodeChange,
}) => {
  const showPurplePlanet = hasBeenClickedOn;

  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    onPlanetCodeChange((event.currentTarget as any).index);
  };

  return (
    <Col
      className={name + "__planets__planet"}
      xs={4}
      md={2}
      key={planetId}
      onClick={handleChange}
    >
      <Figure className={name + "__planets__figure"}>
        <Figure.Image
          className={name + "__planets__img"}
          src={showPurplePlanet ? answerSrc : src}
        />
        <Figure.Image
          className={name + "__planets__moon"}
          src={showPurplePlanet ? purpleQuantumMoon : greyQuantumMoon}
        />
      </Figure>
    </Col>
  );
};

export default Planet;
