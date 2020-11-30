import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/background.png";
import "./credits.css";

const Credits = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="credits">
          <h2 className="credits__title">Credits</h2>
          <div className="credits__video">
            <iframe
              title="credits"
              width="970"
              height="540"
              src="https://www.youtube.com/embed/6Z5xqBUmkoI"
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
                Website Code, Puzzle implementation, Third thing
              </p>
              <a
                className="credits__details--margin"
                href="https://github.com/yannickrocks"
              >
                Coding Portfolio
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Credits;
