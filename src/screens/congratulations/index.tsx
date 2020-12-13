import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/background.png";
import "./congratulations.css";

const Congratulations = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <div className="congratulations">
        <FadeIn delay={1500} transitionDuration={2000}>
          <div className="congratulations__video">
            <iframe
              title="congratulations"
              width="950"
              height="500"
              src="https://www.youtube.com/embed/OOjbSrUIAe4?autoplay=1"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          <div className="credits__mvps">
            <div className="credits__josh">
              <h2 className="credits__josh__title">Josh Lane-Trumper</h2>
              <p className="credits__details">
                Artwork, Puzzle and Web Design, Videography
              </p>
              <div className="credits__details">
                <a
                  className="credits__details--margin"
                  href="https://www.artstation.com/joshtrumper"
                >
                  Artwork Portfolio
                </a>
                |
                <a
                  className="credits__details--margin"
                  href="https://www.behance.net/JoshTrumper"
                >
                  Design Portfolio
                </a>
              </div>
            </div>
            <div className="credits__yan">
              <h2 className="credits__yan__title">Yannick Mermet</h2>
              <p className="credits__details">
                Website Code and Puzzle implementation
              </p>
              <a
                className="credits__details--margin"
                href="https://github.com/yannickrocks"
              >
                Coding Portfolio
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Congratulations;
