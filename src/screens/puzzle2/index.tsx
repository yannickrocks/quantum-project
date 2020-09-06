import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchNoMoon from "src/assets/Misc/Arms-Outstretched_web.png";
import ArmsOutStretchWithMoon from "src/assets/Misc/Arms-Outstretched-full_web.png";
import Planet from "src/components/planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import { WanderingMoonText } from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import "./puzzle2.css";

const puzzle2: React.FC = () => {
  // const [planetCodes, setPlanetCodes] = useState(
  //   Array(PlanetList.length).fill("")
  // );

  // const handleCodesChangePerPlanet = (value: string, indexToChange: number) => {
  //   setPlanetCodes(
  //     planetCodes.map((planetCode, index) => {
  //       if (index === indexToChange) {
  //         return value;
  //       }
  //       return planetCode;
  //     })
  //   );
  // };

  const showProceedButton = true;
  const showWithMoon = true;
  // const showProceedButton = planetCodes.every(
  //   (code, index) => code === PlanetList[index].code
  // );

  // const resetInputs = () => {
  //   setPlanetCodes(
  //     planetCodes.map(() => {
  //       return "";
  //     })
  //   );
  // };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <Container fluid className="p-wanderingmoon">
        <Row className="justify-content-md-center">
          <Col xs={6} md={5} className="puzzle2Message">
            <h2 className="puzzle2Heading">The Wandering Moon</h2>
            <div className="puzzle2WhiteText">
              {WanderingMoonText.map((item) => (
                <>
                  {item}
                  <br />
                  <br />
                </>
              ))}
            </div>
          </Col>
          <Col xs={6} md={4}>
            <Figure className="puzzle2__figure">
              {showWithMoon ? (
                <Figure.Image
                  className="puzzle2__planet"
                  src={ArmsOutStretchNoMoon}
                  alt="Arms Stretch Out No Moon"
                />
              ) : (
                <Figure.Image
                  className="puzzle2__planet"
                  src={ArmsOutStretchWithMoon}
                  alt="Arms Stretch Out No Moon"
                />
              )}
            </Figure>
          </Col>
        </Row>
        <Row className="puzzle2__rowPlayer justify-content-md-center">
          <Col xs={6} md={6}>
            <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </Col>
        </Row>
        <Row className="planets justify-content-md-center">
          {/* {PlanetList.map((item, index) => (
            <Planet
              name="puzzle2"
              src={item.src}
              answerSrc={item.answerSrc}
              planetId={item.planet}
              planetCode={planetCodes[index]}
              correctCode={item.code}
              onPlanetCodeChange={(value: string) => {
                handleCodesChangePerPlanet(value, index);
              }}
            />
          ))} */}
        </Row>
        <Row className="buttons">
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col xs={2}>
            <Button
              className="buttons__reset"
              type="reset"
              // onClick={resetInputs}
            >
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

export default puzzle2;
