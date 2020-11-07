import React from "react";
import FadeIn from "react-fade-in";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Background from "src/assets/Misc/backgroundZaps.png";
import Mask from "src/assets/Misc/Mask.png";
import "./opener1.css";

const Puzzle2Opener: React.FC = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${Background})`,
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
  };

  const containerStyle = {
    width: "700px",
  };

  return (
    <div className="puzzle2__opener" style={backgroundStyle}>
      <FadeIn delay={600} transitionDuration={1000}>
        <Container fluid className="puzzle2__container" style={containerStyle}>
          <Figure className="puzzle2__mask">
            <Figure.Image src={Mask} alt="Mask Puzzle 2" />
          </Figure>
          <a className="puzzle2__wakeUp" href="/wanderingmoon">
            Wake up
          </a>
        </Container>
      </FadeIn>
    </div>
  );
};

export default Puzzle2Opener;
