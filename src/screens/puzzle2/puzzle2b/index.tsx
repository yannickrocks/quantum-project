import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchWithMoon from "src/assets/Misc/Arms-Outstretched-full_web.png";
import QuantumPlanet from "src/components/quantum-planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import {
  WanderingMoonText,
  WanderingMoonIncorrect,
  WanderingMoonCorrect,
} from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import FadeIn from "react-fade-in";
import "../puzzle2.css";

type Puzzle2bProps = {
  increaseCounter(): void;
};

const Puzzle2: React.FC<Puzzle2bProps> = ({ increaseCounter }) => {
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayCorrectMessage, setDisplayCorrectMessage] = useState(false);
  const correctOrderOfClicking = [0, 2, 1, 3, 5, 4];
  const page = "pageB";

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

  const checkAnswers = () => {
    correctOrderOfClicking.every((code, index) => code === planetCodes[index])
      ? setDisplayCorrectMessage(true)
      : setDisplayIncorrectMessage(true);
  };

  const refresh = () => {
    setDisplayIncorrectMessage(false);
    setDisplayCorrectMessage(false);
    setPlanetCodes([]);
    setShowMoon([]);
    increaseCounter();
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600}>
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
                  src={ArmsOutStretchWithMoon}
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
                answerSrc={item.answerSrc}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                purpleQuantumMoon={item.QuantumMoon.Purple}
                pageAorB={page}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnwserArray(index);
                }}
              />
            ))}
          </Row>
          <Row className="puzzle2__buttons">
            <Col xs={16} md={8}>
              {displayCorrectMessage ? (
                <div className="puzzle2__correctText">
                  {WanderingMoonCorrect}
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
              <Button className="puzzle2__buttons__reset" onClick={refresh}>
                Refresh
              </Button>
            </Col>
            <Col xs={4} md={2}>
              {!displayCorrectMessage ? (
                <Button
                  className="puzzle2__buttons__proceed"
                  type="input"
                  onClick={checkAnswers}
                >
                  Check
                </Button>
              ) : (
                <Button
                  className="puzzle2__buttons__proceed"
                  type="input"
                  href="/finalvoyage"
                >
                  Proceed
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </>
  );
};

export default Puzzle2;
