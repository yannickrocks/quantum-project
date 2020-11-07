import React from "react";
import FadeIn from "react-fade-in";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Background from "src/assets/Misc/backgroundZaps.png";
import Mask from "src/assets/Misc/Mask.png";
import "./opener2.css";

const Puzzle3Opener: React.FC = () => {
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
    <div className="puzzle3__opener" style={backgroundStyle}>
      <FadeIn delay={600} transitionDuration={1000}>
        <Container fluid className="puzzle3__container" style={containerStyle}>
          <Figure className="puzzle3__mask">
            <Figure.Image src={Mask} alt="Mask Puzzle 3"></Figure.Image>
          </Figure>
          <a className="puzzle3__wakeUp" href="/finalvoyage">
            Wake up
          </a>
        </Container>
      </FadeIn>
    </div>
  );
};

export default Puzzle3Opener;
