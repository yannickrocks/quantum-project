import { stylesheet } from 'typestyle'

import { coverViewport, mobile, mobileGutters } from '../../styles/breakpoints'

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    ...coverViewport,
  },
  congratulations: {
    textAlign: 'center',
    marginTop: '48px',
    $nest: {
      [mobile]: {
        marginTop: '56px',
        ...mobileGutters,
      },
    },
  },
  congratulations__video: {
    width: '100%',
  },
  iframe: {
    border: 'none',
  },
  failure__button: {
    display: 'flex',
    justifyContent: 'center',
  },

  credits__mvps: {
    width: 'max(40%, 600px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
    $nest: {
      [mobile]: {
        width: 'auto',
        paddingBottom: 'calc(32px + env(safe-area-inset-bottom))',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      },
    },
  },
  credits__josh__title: {
    color: '#5c4cba',
    fontSize: '32px',
    $nest: {
      [mobile]: {
        fontSize: '28px',
      },
    },
  },
  credits__details__margin: {
    marginLeft: '5px',
    marginRight: '5px',
    color: '#ffffff',
    fontSize: '18px',
    $nest: {
      [mobile]: {
        display: 'inline-block',
        padding: '12px 8px',
        marginLeft: 0,
        marginRight: 0,
      },
      '&:hover': {
        color: '#7669da',
      },
    },
  },
  credits__details: {
    color: '#ffffff',
    fontSize: '18px',
    textDecoration: 'none',
    $nest: {
      [mobile]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '4px',
        lineHeight: 1.4,
      },
    },
  },
  credits__yan__title: {
    color: '#388861',
    fontSize: '32px',
    $nest: {
      [mobile]: {
        fontSize: '28px',
      },
    },
  },
  credits__details__marginYan: {
    marginLeft: '5px',
    marginRight: '5px',
    color: '#ffffff',
    fontSize: '18px',
    $nest: {
      [mobile]: {
        display: 'inline-block',
        padding: '12px 8px',
        marginLeft: 0,
        marginRight: 0,
      },
      '&:hover': {
        color: '#388861',
      },
    },
  },
})
