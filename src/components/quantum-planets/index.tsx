import React from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

type QuantumPlanetProps = {
  src: string;
  answerSrc?: string;
  correctCode?: string;
  planetId: string;
  name: string;
  hasBeenClickedOn: boolean;
  greyQuantumMoon?: string;
  purpleQuantumMoon?: string;
  pageAorB: string;
  onPlanetCodeChange(index: string): void;
};

const Planet: React.FC<QuantumPlanetProps> = ({
  src,
  answerSrc,
  planetId,
  hasBeenClickedOn,
  greyQuantumMoon,
  purpleQuantumMoon,
  pageAorB,
  name,
  onPlanetCodeChange,
}) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    onPlanetCodeChange((event.currentTarget as any).index);
  };

  const isPageA = pageAorB === "pageA";

  return (
    <Col className={name + "__planets__planet"} xs={4} md={2} key={planetId}>
      {isPageA ? (
        <Figure className={name + "__planets__figure"} onClick={handleChange}>
          <Figure.Image className={name + "__planets__img"} src={src} />
          {hasBeenClickedOn ? (
            <Figure.Image
              className={name + "__planets__moon"}
              src={greyQuantumMoon}
            />
          ) : (
            ""
          )}
        </Figure>
      ) : (
        <Figure className={name + "__planets__figure"} onClick={handleChange}>
          <Figure.Image
            className={name + "__planets__img"}
            src={hasBeenClickedOn ? answerSrc : src}
          />
          {hasBeenClickedOn ? (
            <Figure.Image
              className={name + "__planets__moon"}
              src={purpleQuantumMoon}
            />
          ) : (
            ""
          )}
        </Figure>
      )}
    </Col>
  );
};

export default Planet;
