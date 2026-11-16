import { stylesheet } from 'typestyle'
import type { NestedCSSProperties } from 'typestyle/lib/types'

import {
  coverViewport,
  focusRing,
  mobile,
  palette,
  smallButton,
  mobilePage,
  mobileTextColumn,
  unstyledButton,
} from '../../styles/breakpoints'

const warpOverlay: NestedCSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  pointerEvents: 'none',
}

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    ...coverViewport,
  },
  warpFlash: {
    ...warpOverlay,
    backgroundImage:
      'radial-gradient(circle at center, #ffffff 0%, #e4dcff 40%, #7669da 100%)',
  },
  warpFade: {
    ...warpOverlay,
    backgroundColor: '#000000',
  },
  finalVoyage: {
    margin: '0 auto',
    width: '65%',
    $nest: {
      [mobile]: {
        ...mobilePage,
      },
    },
  },
  puzzle3__detailsAndImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    $nest: {
      [mobile]: {
        flexDirection: 'column',
      },
    },
  },
  puzzle3__details: {
    padding: '10px',
    paddingBottom: '40px',
    width: '55%',
    minHeight: '320px',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    $nest: {
      [mobile]: {
        ...mobileTextColumn,
      },
    },
  },
  puzzle3__details__h2: {
    marginTop: '40px',
    color: '#b75053',
    fontSize: '40px',
    fontWeight: 700,
    marginBottom: '15px',
    $nest: {
      [mobile]: {
        marginTop: 0,
        fontSize: '32px',
      },
    },
  },
  puzzle3__details__p: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    $nest: {
      [mobile]: {
        fontSize: '17px',
        lineHeight: 1.5,
      },
    },
  },
  puzzle3__figure: {
    width: '20%',
    margin: 0,
    $nest: {
      [mobile]: {
        width: 'min(50%, 220px)',
        margin: '16px auto 0',
      },
    },
  },
  puzzle3__figure__img: {
    width: '100%',
    marginTop: '70px',
    $nest: {
      [mobile]: {
        marginTop: 0,
      },
    },
  },
  finalVoyage__ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
    marginLeft: '60px',
    $nest: {
      [mobile]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) minmax(0, 0.7fr)',
        gap: '8px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '468px',
        marginLeft: 'auto',
        padding: 0,
        listStyle: 'none',
      },
    },
  },
  finalVoyage__li: {
    width: '185px',
    position: 'relative',
    $nest: {
      [mobile]: {
        width: '100%',
      },
    },
  },
  puzzle3__warp__button: {
    ...unstyledButton,
    width: '100%',
    aspectRatio: '1 / 1',
    $nest: {
      '&:focus-visible': focusRing,
    },
  },
  puzzle3__warps__figure__back: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  puzzle3__launch__button: {
    ...unstyledButton,
    width: '30%',
    margin: '1em 40px',
    $nest: {
      '&:focus-visible': focusRing,
      [mobile]: {
        width: '100%',
        minWidth: '44px',
        margin: '0 auto',
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  puzzle3__launch__figure__img: {
    width: '100%',
    marginTop: '-18px',
    $nest: {
      [mobile]: {
        marginTop: 0,
        display: 'block',
      },
    },
  },
  puzzle3__details__warning: {
    textAlign: 'center',
    color: '#D6D6D6',
    fontWeight: 900,
    $nest: {
      [mobile]: {
        margin: 0,
        fontSize: '16px',
      },
    },
  },

  puzzle3__buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
    margin: '0 auto',
    $nest: {
      [mobile]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      },
    },
  },
  puzzle3__buttons__reset: {
    ...smallButton(palette.red, palette.redHover),
    width: '140px',
  },
})
