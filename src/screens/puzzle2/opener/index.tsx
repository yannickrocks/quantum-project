import React from "react";
import FadeIn from "react-fade-in";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background from "src/assets/Misc/background.png";
import Mask from "src/assets/Misc/Mask.png";
import "../puzzle2.css";

const Puzzle2Opener: React.FC = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600}>
        <Container fluid className="p-wanderingmoon">
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
              <Figure className="puzzle2__Mask">
                <Figure.Image src={Mask} alt="Mask Puzzle 2"></Figure.Image>
              </Figure>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={5} md={3}>
              <Button
                className="puzzle2__wakeUp"
                type="input"
                href="/wanderingmoon"
              >
                Wake up
              </Button>
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </>
  );
};

export default Puzzle2Opener;
