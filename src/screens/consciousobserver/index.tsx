import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/background.png";
import "./consciousobserver.css";

const ConsciousObserver = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={1500} transitionDuration={2000}>
        <div className="congratulations">
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
                |
                <a
                  className="credits__details--margin"
                  href="https://www.instagram.com/joshan_meow"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="credits__yan">
              <h2 className="credits__yan__title">Yannick Mermet</h2>
              <p className="credits__details">
                Website Code and Puzzle Implementation
              </p>
              <a
                className="credits__details--margin"
                href="https://github.com/yannickrocks"
              >
                Coding Portfolio
              </a>
              |
              <a
                className="credits__details--margin"
                href="https://www.instagram.com/adventuresofyan"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default ConsciousObserver;
