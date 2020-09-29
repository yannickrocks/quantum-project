import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchNoMoon from "src/assets/Misc/Arms-Outstretched_web.png";
import QuantumPlanet from "src/components/quantum-planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import {
  WanderingMoonText,
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
} from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import "../puzzle2.css";

const Puzzle2: React.FC = () => {
  const [planetCodes, setPlanetCodes] = useState(Array());
  const [showMoon, setShowMoon] = useState(Array());
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false);
  const correctOrderOfClicking = [0, 2, 1, 3, 5, 4];
  const page = "pageA";

  const addOrRemoveFromAnwserArray = (indexToChange: number) => {
    const exists = planetCodes.find((index) => index === indexToChange);
    if (exists !== indexToChange) {
      const newArray = [...planetCodes, indexToChange];
      setPlanetCodes(newArray);

      const moonArray = [indexToChange];
      setShowMoon(moonArray);
    } else {
      const indexValue = planetCodes.indexOf(indexToChange);
      var newArray = [
        ...planetCodes.slice(0, indexValue),
        ...planetCodes.slice(indexValue + 1),
      ];
      setPlanetCodes(newArray);
    }
  };

  const checkAnswers = (event: React.MouseEvent<HTMLElement>) => {
    correctOrderOfClicking.every((code, index) => code === planetCodes[index])
      ? setDisplayTrackingMessage(true)
      : setDisplayIncorrectMessage(true);
  };

  const resetInputs = () => {
    setPlanetCodes([]);
    setShowMoon([]);
    setDisplayIncorrectMessage(false);
    setDisplayTrackingMessage(false);
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
              <Figure.Image
                className="puzzle2__armsOut"
                src={ArmsOutStretchNoMoon}
                alt="Arms Stretch Out No Moon"
              />
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
              planetId={item.planet}
              hasBeenClickedOn={showMoon.includes(index)}
              greyQuantumMoon={item.QuantumMoon.Grey}
              pageAorB={page}
              onPlanetCodeChange={() => {
                addOrRemoveFromAnwserArray(index);
              }}
            />
          ))}
        </Row>
        <Row className="puzzle2__buttons">
          <Col xs={16} md={8}>
            {displayTrackingMessage ? (
              <div className="puzzle2__almostCorrectText">
                {WanderingMoonAlmostCorrect}
              </div>
            ) : (
              <></>
            )}
            {displayIncorrectMessage ? (
              <div className="puzzle2__incorrectText">
                {WanderingMoonIncorrect}
              </div>
            ) : (
              <></>
            )}
          </Col>
          <Col xs={4} md={2}>
            <Button
              className="puzzle2__buttons__reset"
              type="reset"
              onClick={resetInputs}
            >
              Reset
            </Button>
          </Col>
          <Col xs={4} md={2}>
            <Button
              className="puzzle2__buttons__proceed"
              type="input"
              onClick={checkAnswers}
            >
              Check
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Puzzle2;
