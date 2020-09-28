import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchNoMoon from "src/assets/Misc/Arms-Outstretched_web.png";
import ArmsOutStretchWithMoon from "src/assets/Misc/Arms-Outstretched-full_web.png";
import QuantumPlanet from "src/components/quantum-planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import { WanderingMoonText } from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import "./puzzle2.css";

const Puzzle2: React.FC = () => {
  const [planetCodes, setPlanetCodes] = useState(Array());
  const correctOrderOfClicking = [0, 2, 1, 3, 5, 4];

  const addOrRemoveFromAnwserArray = (indexToChange: number) => {
    const exists = planetCodes.find((index) => index === indexToChange);
    if (exists !== indexToChange) {
      const newArray = [...planetCodes, indexToChange];
      setPlanetCodes(newArray);
    } else {
      const indexValue = planetCodes.indexOf(indexToChange);
      var newArray = [
        ...planetCodes.slice(0, indexValue),
        ...planetCodes.slice(indexValue + 1),
      ];
      setPlanetCodes(newArray);
    }
  };

  const showMoon = false;
  const showProceedButton = correctOrderOfClicking.every(
    (code, index) => code === planetCodes[index]
  );

  const resetInputs = () => {
    setPlanetCodes([]);
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <Container fluid className="p-wanderingmoon">
        <Row className="puzzle2__details justify-content-md-center">
          <Col xs={6} md={4}>
            <h2 className="puzzle2__heading">The Wandering Moon</h2>
            <div className="puzzle2__whiteText">
              {WanderingMoonText.map((item) => (
                <>
                  {item}
                  <br />
                  <br />
                </>
              ))}
            </div>
          </Col>
          <Col xs={4} md={2}>
            <Figure className="puzzle2__figure">
              {showMoon ? (
                <Figure.Image
                  className="puzzle2__armsOut"
                  src={ArmsOutStretchWithMoon}
                  alt="Arms Stretch Out No Moon"
                />
              ) : (
                <Figure.Image
                  className="puzzle2__armsOut"
                  src={ArmsOutStretchNoMoon}
                  alt="Arms Stretch Out No Moon"
                />
              )}
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={7} md={5}>
            <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </Col>
        </Row>
        <Row className="puzzle2__planets justify-content-md-center">
          {PlanetList.map((item, index) => (
            <QuantumPlanet
              name="puzzle2"
              src={item.src}
              answerSrc={item.answerSrc}
              planetId={item.planet}
              hasBeenClickedOn={planetCodes.includes(index)}
              greyQuantumMoon={item.QuantumMoon.Grey}
              purpleQuantumMoon={item.QuantumMoon.Purple}
              onPlanetCodeChange={() => {
                addOrRemoveFromAnwserArray(index);
              }}
            />
          ))}
        </Row>
        <Row className="puzzle2__buttons">
          <Col xs={4} md={2}></Col>
          <Col xs={4} md={2}></Col>
          <Col xs={4} md={2}></Col>
          <Col xs={4} md={2}></Col>
          <Col xs={4} md={2}></Col>
          <Col xs={4} md={2}>
            {showProceedButton ? (
              <Button
                className="puzzle2__buttons__proceed"
                type="input"
                href="/finalvoyage"
              >
                Proceed
              </Button>
            ) : (
              <Button
                className="puzzle2__buttons__reset"
                type="reset"
                onClick={resetInputs}
              >
                Reset
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Puzzle2;
