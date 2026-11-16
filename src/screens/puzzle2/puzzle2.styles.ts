import { stylesheet } from 'typestyle'
import type { NestedCSSProperties } from 'typestyle/lib/types'

import {
  coverViewport,
  mobile,
  palette,
  smallButton,
  mobilePage,
} from '../../styles/breakpoints'

const mobileStatusText: NestedCSSProperties = {
  flexBasis: '100%',
  textAlign: 'center',
  margin: 0,
}

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    ...coverViewport,
  },
  pWanderingmoon: {
    margin: '0 auto',
    width: '60%',
    $nest: {
      [mobile]: {
        ...mobilePage,
      },
    },
  },
  detailsAndImageDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    $nest: {
      [mobile]: {
        flexDirection: 'column',
      },
    },
  },
  figure: {
    width: '30%',
    $nest: {
      [mobile]: {
        width: 'min(70%, 320px)',
        margin: '16px auto 0',
      },
    },
  },
  figure_img: {
    width: '100%',
  },
  quantumPlanets_ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: '25px',
    $nest: {
      [mobile]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        listStyle: 'none',
        marginTop: '16px',
      },
    },
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    $nest: {
      [mobile]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        marginTop: '8px',
      },
    },
  },
  buttons__reset: {
    ...smallButton(palette.red, palette.redHover),
    lineHeight: '35px',
  },
  buttons__checkAnswers: {
    ...smallButton(palette.green, palette.greenHover),
    marginLeft: '35px',
  },
  buttons__proceed: {
    ...smallButton(palette.green, palette.greenHover),
    marginLeft: '35px',
    lineHeight: '35px',
  },
  buttons__almostCorrectText: {
    color: '#7669da',
    fontWeight: 800,
    marginRight: 'auto',
    $nest: {
      [mobile]: {
        ...mobileStatusText,
      },
    },
  },
  buttons__incorrectText: {
    color: '#c0585a',
    fontWeight: 800,
    marginRight: 'auto',
    $nest: {
      [mobile]: {
        ...mobileStatusText,
      },
    },
  },
  correctText: {
    color: '#388861',
    fontWeight: 800,
    marginRight: 'auto',
    $nest: {
      [mobile]: {
        ...mobileStatusText,
      },
    },
  },
})
