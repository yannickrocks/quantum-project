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
  correctOrderOfClicking,
} from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import FadeIn from "react-fade-in";
import "../puzzle2.css";

type Puzzle2aProps = {
  increaseCounter(): void;
};

const Puzzle2: React.FC<Puzzle2aProps> = ({ increaseCounter }) => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== "Sun");
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton, setRefreshToggle] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false);
  const page = "pageA";

  const addOrRemoveFromAnwserArray = (indexToChange: number) => {
    const exists = planetCodes.find((index) => index === indexToChange);
    if (exists !== indexToChange) {
      const newArray = [...planetCodes, indexToChange];
      setPlanetCodes(newArray);
      console.log(newArray);

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

  const checkAnswers = () => {
    correctOrderOfClicking.every((code, index) => code === planetCodes[index])
      ? setDisplayTrackingMessage(true)
      : setDisplayIncorrectMessage(true);

    setRefreshToggle(true);
  };

  const reset = () => {
    setDisplayIncorrectMessage(false);
    setDisplayTrackingMessage(false);
    setPlanetCodes([]);
    setShowMoon([]);
  };

  const refresh = () => {
    increaseCounter();
    window.location.reload(false);
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <Container fluid className="p-wanderingmoon">
          <Row className="puzzle2__details justify-content-md-center">
            <Col xs={8} md={6}>
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
            {adjustedPlanetList.map((item, index) => (
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
              {showRefreshButton ? (
                <Button className="puzzle2__buttons__reset" onClick={refresh}>
                  Refresh
                </Button>
              ) : (
                <Button className="puzzle2__buttons__reset" onClick={reset}>
                  Reset
                </Button>
              )}
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
      </FadeIn>
    </>
  );
};

export default Puzzle2;
