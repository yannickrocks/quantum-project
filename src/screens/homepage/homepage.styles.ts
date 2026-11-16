import { stylesheet } from 'typestyle'

import {
  mobile,
  mobileCtaMaxWidth,
  mobileCtaMinHeight,
  mobilePage,
} from '../../styles/breakpoints'

export default stylesheet({
  homepage: {
    margin: '0 auto',
    width: '80%',
    $nest: {
      [mobile]: {
        ...mobilePage,
      },
    },
  },
  figureLogo: {
    width: '400px',
    margin: '0 auto',
    marginTop: '70px',
    $nest: {
      [mobile]: {
        width: 'min(400px, 70vw)',
        marginTop: '32px',
      },
    },
  },
  figureLogo__logo: {
    width: '100%',
  },
  welcomeText: {
    textAlign: 'center',
    color: '#ed6c00',
    fontSize: '60px',
    fontWeight: 700,
    margin: 0,
    $nest: {
      [mobile]: {
        fontSize: 'clamp(34px, 9vw, 60px)',
      },
    },
  },
  description: {
    margin: '0 auto',
    width: '70%',
    textAlign: 'center',
    letterSpacing: '0px',
    color: '#292b50',
    fontWeight: 500,
    fontSize: '20px',
    $nest: {
      [mobile]: {
        width: '100%',
        fontSize: '18px',
      },
    },
  },
  disclaimer: {
    paddingTop: '15px',
  },
  disclaimer__text: {
    margin: '0 auto',
    width: '70%',
    textAlign: 'center',
    letterSpacing: '0px',
    color: '#757575',
    fontWeight: 500,
    fontSize: '15px',
    $nest: {
      [mobile]: {
        width: '100%',
        fontSize: '16px',
      },
    },
  },
  launch: {
    display: 'flex',
    justifyContent: 'center',
  },
  launchButton: {
    width: '420px',
    border: 'none',
    borderRadius: '6px',
    textDecoration: 'none',
    backgroundColor: '#388861',
    color: '#ffffff',
    fontSize: '30px',
    fontWeight: 800,
    padding: '20px',
    textAlign: 'center',
    $nest: {
      [mobile]: {
        width: '100%',
        maxWidth: mobileCtaMaxWidth,
        boxSizing: 'border-box',
        minHeight: mobileCtaMinHeight,
        fontSize: '26px',
      },
      '&:hover': {
        backgroundColor: '#1f5c3e',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
})
