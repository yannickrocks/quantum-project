import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Background from "src/assets/Misc/background.png";
import Statue from "src/assets/Misc/Statue-Awakened_web.png";
import Warp1 from "src/assets/Warp-Purples/WarpCore_1.png";
import Warp2 from "src/assets/Warp-Purples/WarpCore_2.png";
import Warp3 from "src/assets/Warp-Purples/WarpCore_3.png";
import Launch1 from "src/assets/Warp-Purples/Launch_1.png";
import { FinalVoyageText } from "src/assets/Texts/Constants";
import ResponsivePlayer from "src/components/responsive-player";
import CountDown from "src/components/countdown";
import "./puzzle3.css";

const Puzzle3: React.FC = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <Container fluid className="finalVoyage">
        <Row className="puzzle3__details justify-content-md-center">
          <Col xs={8} md={6}>
            <h2 className="puzzle3__heading">The final voyage</h2>
            <div className="puzzle3__whiteText">
              {FinalVoyageText.map((item) => (
                <>
                  {item}
                  <br />
                  <br />
                </>
              ))}
            </div>
          </Col>
          <Col xs={4} md={2}>
            <Figure className="puzzle3__figure">
              <Figure.Image
                className="puzzle3__statue"
                src={Statue}
                alt="Statue"
              />
            </Figure>
          </Col>
        </Row>
        <Row className="videoPlayer justify-content-md-center">
          <Col xs={7} md={5}>
            <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </Col>
        </Row>
        <Row className="puzzle3__warps justify-content-md-center">
          <Col className="puzzle3__warps__col" xs={4} md={2}></Col>
          <Col className="puzzle3__warps__col" xs={4} md={2}>
            <Figure className="puzzle3__warps__warp">
              <Figure.Image src={Warp1} />
            </Figure>
          </Col>
          <Col className="puzzle3__warps__col" xs={4} md={2}>
            <Figure className="puzzle3__warps__warp">
              <Figure.Image src={Warp2} />
            </Figure>
          </Col>
          <Col className="puzzle3__warps__col" xs={4} md={2}>
            <Figure className="puzzle3__warps__warp">
              <Figure.Image src={Warp3} />
            </Figure>
          </Col>
          <Col xs={1} />
          <Col xs={4} md={2}>
            <Figure className="puzzle3__warps__launch">
              <Figure.Image src={Launch1} />
            </Figure>
          </Col>
        </Row>
        <Row className="puzzle3__buttons">
          <Col xs={4} md={2}>
            <Button
              className="puzzle3__buttons__reset"
              type="reset"
              // onClick={resetInputs}
            >
              Reset
            </Button>
          </Col>
          <Col xs={9} md={7}></Col>
          <Col xs={4} md={2}>
            <CountDown />
          </Col>
          <Col xs={4} md={2}>
            {/* <Button
              className="puzzle3__buttons__proceed"
              type="input"
              href="/wanderingmoon"
            >
              Proceed
            </Button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Puzzle3;