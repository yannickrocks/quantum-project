import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import TimberHeath from "src/assets/Misc/Timber-Hearth_web.png";
import Planet from "src/screens/puzzle1/planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import { Minutes22Text } from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import "./puzzle1.css";

const Puzzle1: React.FC = () => {
  const [planetCodes, setPlanetCodes] = useState(
    Array(PlanetList.length).fill("")
  );

  const handleCodesChangePerPlanet = (value: string, indexToChange: number) => {
    setPlanetCodes(
      planetCodes.map((planetCode, index) => {
        if (index === indexToChange) {
          return value;
        }
        return planetCode;
      })
    );
  };

  const showProceedButton = planetCodes.every(
    (code, index) => code === PlanetList[index].code
  );

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <Container fluid className="p-22-minutes">
        <Row>
          <Col xs={12} md={8} className="puzzleMessage">
            <h2 className="puzzle1Heading">22 Minutes</h2>
            <div className="puzzle1WhiteText">
              {Minutes22Text.map((item) => (
                <>
                  {item}
                  <br />
                  <br />
                </>
              ))}
            </div>
          </Col>
          <Col xs={6} md={4}>
            <Figure className="puzzle1__figure">
              <Figure.Image
                className="puzzle1__planet"
                src={TimberHeath}
                alt="Timber Heath"
              />
            </Figure>
          </Col>
        </Row>
        <Row className="puzzle1__rowPlayer">
          <Col></Col>
          <Col xs={6}>
            <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </Col>
          <Col></Col>
        </Row>
        <Row className="planets">
          {PlanetList.map((item, index) => (
            <Planet
              src={item.src}
              answerSrc={item.answerSrc}
              planetId={item.planet}
              planetCode={planetCodes[index]}
              correctCode={item.code}
              onPlanetCodeChange={(value: string) => {
                handleCodesChangePerPlanet(value, index);
              }}
            />
          ))}
        </Row>
        <Row className="buttons">
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}>
            <Button className="buttons__reset" type="reset" href="/22minutes">
              Reset
            </Button>
          </Col>
          <Col xs={2}>
            {showProceedButton && (
              <Button className="buttons__proceed" type="input">
                Proceed
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Puzzle1;
