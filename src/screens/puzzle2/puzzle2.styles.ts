import { stylesheet } from 'typestyle'
import type { NestedCSSProperties } from 'typestyle/lib/types'

import {
  coverViewport,
  mobile,
  mobileButton,
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
    width: '15%',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#b75053',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginTop: '5px',
    textDecoration: 'none',
    lineHeight: '35px',
    $nest: {
      [mobile]: {
        ...mobileButton,
      },
      '&:hover': {
        backgroundColor: ' #8a2c2f',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
  buttons__checkAnswers: {
    width: '15%',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#33835c',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginLeft: ' 35px',
    marginTop: '5px',
    textDecoration: 'none',
    $nest: {
      [mobile]: {
        ...mobileButton,
      },
      '&:hover': {
        backgroundColor: '#1f5c3e',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
  buttons__proceed: {
    width: '15%',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#33835c',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginLeft: '35px',
    marginTop: '5px',
    textDecoration: 'none',
    lineHeight: '35px',
    $nest: {
      [mobile]: {
        ...mobileButton,
      },
      '&:hover': {
        backgroundColor: '#1f5c3e',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
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
