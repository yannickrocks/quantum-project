import { stylesheet } from 'typestyle'

import {
  mobile,
  mobileCtaMaxWidth,
  mobileCtaMinHeight,
  mobileGutters,
  shortLandscape,
} from '../../styles/breakpoints'

export default stylesheet({
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  },
  opener__figure__mask: {
    width: '30%',
    margin: 'auto',
    position: 'relative',
    $nest: {
      [mobile]: {
        width: 'min(55vw, 280px)',
      },
      [shortLandscape]: {
        width: 'min(55vw, 52svh)',
      },
    },
  },
  opener__figure__mask__img: {
    width: '100%',
    marginTop: '150px',
    $nest: {
      [mobile]: {
        marginTop: '15vh',
      },
      [shortLandscape]: {
        marginTop: '4svh',
      },
    },
  },
  opener__button: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  opener__button__a: {
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
    backgroundColor: '#5341ae',
    $nest: {
      [mobile]: {
        width: 'auto',
        flex: '1 1 auto',
        maxWidth: mobileCtaMaxWidth,
        boxSizing: 'border-box',
        minHeight: mobileCtaMinHeight,
        ...mobileGutters,
        marginBottom: 'calc(24px + env(safe-area-inset-bottom))',
      },
      [shortLandscape]: {
        marginTop: '16px',
      },
      '&:hover': {
        backgroundColor: '#271c5a',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
})
