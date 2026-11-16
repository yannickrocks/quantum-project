import { stylesheet } from 'typestyle'

import {
  coverViewport,
  mobile,
  mobileCtaMaxWidth,
  mobileCtaMinHeight,
  mobileGutters,
} from '../../styles/breakpoints'

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    ...coverViewport,
  },
  failure: {
    textAlign: 'center',
    marginTop: '200px',
    $nest: {
      [mobile]: {
        marginTop: '56px',
        ...mobileGutters,
      },
    },
  },
  failure__button: {
    display: 'flex',
    justifyContent: 'center',
  },
  failure__credits: {
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '25px',
    fontWeight: 800,
    border: 'none',
    borderRadius: '15px',
    marginTop: '50px',
    padding: '20px',
    width: '420px',
    textDecoration: 'none',
    backgroundColor: '#b75053',
    $nest: {
      [mobile]: {
        width: 'auto',
        flex: '1 1 auto',
        maxWidth: mobileCtaMaxWidth,
        boxSizing: 'border-box',
        minHeight: mobileCtaMinHeight,
        fontSize: '22px',
        marginBottom: 'calc(32px + env(safe-area-inset-bottom))',
      },
      '&:hover': {
        backgroundColor: '#6d1919',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
})
