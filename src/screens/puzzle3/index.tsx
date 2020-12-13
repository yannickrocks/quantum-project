import React, { useEffect, useState } from "react";
import Background from "src/assets/Misc/background.png";
import Statue from "src/assets/Misc/Statue-Awakened_web.png";
import Launch1 from "src/assets/Warp-Purples/Launch_1.png";
import LaunchGif from "src/assets/Warp-Purples/launch.gif";
import { FinalVoyageText } from "src/assets/Texts/Constants";
import Warp1NotFilled from "src/assets/Warp-Purples/WarpCore_1.png";
import Warp2NotFilled from "src/assets/Warp-Purples/WarpCore_2.png";
import Warp3NotFilled from "src/assets/Warp-Purples/WarpCore_3.png";
import CountDown from "src/components/countdown";
import FadeIn from "react-fade-in";
import { CookiesProvider } from "react-cookie";
import Warp from "src/components/warps";
import "./puzzle3.css";
import { useHistory } from "react-router-dom";
import {
  WarpList1,
  WarpList2,
  WarpList3,
  CorrectWarpList,
} from "src/assets/WarpLists";
import sound from "src/assets/Nomai_Warp_01.wav";
import useSound from "use-sound";

const Puzzle3 = () => {
  const [showGif, setGifFlag] = useState(false);
  const [countDownTimer, setCountdownTimer] = useState("");
  const [warp1, setWarp1] = useState(WarpList1[0]);
  const [warp2, setWarp2] = useState(WarpList2[0]);
  const [warp3, setWarp3] = useState(WarpList3[0]);
  const [play] = useSound(sound);
  const history = useHistory();

  useEffect(() => {
    const handleCountdown = (time: string) => {
      if (parseInt(time) === 0) {
        history.push({
          pathname: "/failure",
        });
      }
    };
    handleCountdown(countDownTimer);
  }, [countDownTimer, history]);

  const handleWarpClick = (value: string, warptype: string) => {
    switch (warptype) {
      case "Warp1": {
        const index = WarpList1.findIndex((element) => element === value);
        if (index + 1 === WarpList1.length) {
          setWarp1(WarpList1[0]);
        } else {
          setWarp1(WarpList1[index + 1]);
        }
        break;
      }
      case "Warp2": {
        const index = WarpList2.findIndex((element) => element === value);
        if (index + 1 === WarpList2.length) {
          setWarp2(WarpList2[0]);
        } else {
          setWarp2(WarpList2[index + 1]);
        }
        break;
      }
      case "Warp3": {
        const index = WarpList3.findIndex((element) => element === value);
        if (index + 1 === WarpList3.length) {
          setWarp3(WarpList3[0]);
        } else {
          setWarp3(WarpList3[index + 1]);
        }
        break;
      }
      default:
        return;
    }
  };

  const checkAnswers = () => {
    const warp1Index = WarpList1.findIndex((element) => element === warp1);
    const warp2Index = WarpList2.findIndex((element) => element === warp2);
    const warp3Index = WarpList3.findIndex((element) => element === warp3);

    if (warp1Index !== 0 && warp2Index !== 0 && warp3Index !== 0) {
      setGifFlag(!showGif);

      setTimeout(() => {
        const inputArray = [warp1Index, warp2Index, warp3Index];
        play();
        var isCorrect = CorrectWarpList.every(
          (code, index) => code === inputArray[index]
        );
        isCorrect
          ? history.push({
              pathname: "/consciousobserver",
            })
          : history.push({
              pathname: "/terriblefate",
            });
      }, 2000);
    }
  };

  const resetInputs = () => {
    setWarp1(WarpList1[0]);
    setWarp2(WarpList2[0]);
    setWarp3(WarpList3[0]);
  };

  return (
    <CookiesProvider>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="finalVoyage">
          <div className="puzzle3__detailsAndImage">
            <div className="puzzle3__details">
              <h2>The Final Voyage</h2>
              <p>
                {FinalVoyageText.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </p>
            </div>
            <figure className="puzzle3__figure">
              <img src={Statue} alt="Statue" />
            </figure>
          </div>
          <div className="puzzle3__video">
            <iframe
              title="puzzle3"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/zV2yu1X8eOw"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <ul>
            <li key="Warp 1">
              <Warp
                src={warp1}
                name="Warp 1"
                warp={Warp1NotFilled}
                changeImage={(value: string) => handleWarpClick(value, "Warp1")}
              />
            </li>

            <li key="Warp 2">
              <Warp
                src={warp2}
                name="Warp 2"
                warp={Warp2NotFilled}
                changeImage={(value: string) => handleWarpClick(value, "Warp2")}
              />
            </li>
            <li key="Warp 3">
              <Warp
                src={warp3}
                name="Warp 3"
                warp={Warp3NotFilled}
                changeImage={(value: string) => handleWarpClick(value, "Warp3")}
              />
            </li>
            <li key="Launch">
              <figure className="puzzle3__launch__figure">
                <img
                  src={showGif ? LaunchGif : Launch1}
                  alt="Launch 1"
                  onClick={checkAnswers}
                />
              </figure>
            </li>
          </ul>
          <div className="puzzle3__buttons">
            <button
              className="puzzle3__buttons--reset"
              type="reset"
              onClick={resetInputs}
            >
              Reset
            </button>
            <div className="puzzle3__countdown">
              <CountDown
                checkTimer={(value: string) => setCountdownTimer(value)}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  );
};

export default Puzzle3;
