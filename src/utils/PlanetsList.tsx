import GSun from '../assets/Planets/Grey/Sun-Grey_web.webp'
import GEye from '../assets/Planets/Grey/Eye-Grey_web.webp'
import GTwins from '../assets/Planets/Grey/Twins-Grey_web.webp'
import GTimberHearth from '../assets/Planets/Grey/TH-Grey_web.webp'
import GBrittleHollow from '../assets/Planets/Grey/BH-Grey_web.webp'
import GGiantsDeep from '../assets/Planets/Grey/GD-Grey_web.webp'
import GDarkBramble from '../assets/Planets/Grey/DB-Grey_web.webp'
import GQuantumMoon from '../assets/Planets/Grey/QM-Grey_web.webp'
import PSun from '../assets/Planets/Purple/Sun-Purple_web.webp'
import PEye from '../assets/Planets/Purple/Eye-Purple_web.webp'
import PTwins from '../assets/Planets/Purple/Twins-Purple_web.webp'
import PTimberHearth from '../assets/Planets/Purple/TH-Purple_web.webp'
import PBrittleHollow from '../assets/Planets/Purple/BH-Purple_web.webp'
import PGiantsDeep from '../assets/Planets/Purple/GD-Purple_web.webp'
import PDarkBramble from '../assets/Planets/Purple/DB-Purple_web.webp'
import PQuantumMoon from '../assets/Planets/Purple/QM-Purple_web.webp'

export const QuantumMoon = {
  Grey: GQuantumMoon,
  Purple: PQuantumMoon,
}

export const PlanetList = [
  {
    standardImg: GSun,
    answerSrc: PSun,
    planet: 'Sun',
    puzzle1code: '2200',
  },
  {
    standardImg: GEye,
    answerSrc: PEye,
    planet: 'Eye',
    puzzle1code: '0',
  },
  {
    standardImg: GTwins,
    answerSrc: PTwins,
    planet: 'Twins',
    puzzle1code: '1905',
  },
  {
    standardImg: GTimberHearth,
    answerSrc: PTimberHearth,
    planet: 'TimberHearth',
    puzzle1code: '1128',
  },
  {
    standardImg: GBrittleHollow,
    answerSrc: PBrittleHollow,
    planet: 'BrittleHollow',
    puzzle1code: '0431',
  },
  {
    standardImg: GGiantsDeep,
    answerSrc: PGiantsDeep,
    planet: 'GiantsDeep',
    puzzle1code: '0626',
  },
  {
    standardImg: GDarkBramble,
    answerSrc: PDarkBramble,
    planet: 'DarkBramble',
    puzzle1code: '1308',
  },
]

export const correctOrderOfClicking = [
  4, 2, 1, 4, 3, 1, 5, 2, 4, 1, 3, 4, 2, 5, 3, 4, 2, 1, 4, 3, 5, 0,
]
// GD, Timber, Twins, GD, BH, Twins, Bramble, Timber, GD, Twins, BH, GD, Timber,
// Bramble, BH, GD, Timber, Twins, GD, BH, Bramble, Eye.
