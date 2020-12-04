import GSun from "src/assets/Planets/Grey/Sun-Grey_web.png";
import GEye from "src/assets/Planets/Grey/Eye-Grey_web.png";
import GTwins from "src/assets/Planets/Grey/Twins-Grey_web.png";
import GTimberHearth from "src/assets/Planets/Grey/TH-Grey_web.png";
import GBrittleHollow from "src/assets/Planets/Grey/BH-Grey_web.png";
import GGiantsDeep from "src/assets/Planets/Grey/GD-Grey_web.png";
import GDarkBramble from "src/assets/Planets/Grey/DB-Grey_web.png";
import GQuantumMoon from "src/assets/Planets/Grey/QM-Grey_web.png";
import PSun from "src/assets/Planets/Purple/Sun-Purple_web.png";
import PEye from "src/assets/Planets/Purple/Eye-Purple_web.png";
import PTwins from "src/assets/Planets/Purple/Twins-Purple_web.png";
import PTimberHearth from "src/assets/Planets/Purple/TH-Purple_web.png";
import PBrittleHollow from "src/assets/Planets/Purple/BH-Purple_web.png";
import PGiantsDeep from "src/assets/Planets/Purple/GD-Purple_web.png";
import PDarkBramble from "src/assets/Planets/Purple/DB-Purple_web.png";
import PQuantumMoon from "src/assets/Planets/Purple/QM-Purple_web.png";

export const PlanetList = [
  {
    src: GSun,
    answerSrc: PSun,
    planet: "Sun",
    puzzle1code: "2200",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GEye,
    answerSrc: PEye,
    planet: "Eye",
    puzzle1code: "0",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GTwins,
    answerSrc: PTwins,
    planet: "Twins",
    puzzle1code: "1905",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GTimberHearth,
    answerSrc: PTimberHearth,
    planet: "TimberHearth",
    puzzle1code: "1128",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GBrittleHollow,
    answerSrc: PBrittleHollow,
    planet: "BrittleHollow",
    puzzle1code: "0431",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GGiantsDeep,
    answerSrc: PGiantsDeep,
    planet: "GiantsDeep",
    puzzle1code: "0626",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
  {
    src: GDarkBramble,
    answerSrc: PDarkBramble,
    planet: "DarkBramble",
    puzzle1code: "1308",
    QuantumMoon: {
      Grey: GQuantumMoon,
      Purple: PQuantumMoon,
    },
  },
];

export const correctOrderOfClicking = [
  4,
  2,
  1,
  4,
  3,
  1,
  5,
  2,
  4,
  1,
  3,
  4,
  2,
  5,
  3,
  4,
  2,
  1,
  4,
  3,
  5,
  0,
];
// GD, Timber, Twins, GD, BH, Twins, Bramble, Timber, GD, Twins, BH, GD, Timber,
// Bramble, BH, GD, Timber, Twins, GD, BH, Bramble, Eye.
