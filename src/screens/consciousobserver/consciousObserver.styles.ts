import { stylesheet } from 'typestyle'

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
  },
  congratulations: {
    textAlign: 'center',
    marginTop: '200px',
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
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  credits__josh__title: {
    color: '#5341ae',
    fontSize: '32px',
  },
  credits__details__margin: {
    marginLeft: '5px',
    marginRight: '5px',
    color: '#ffffff',
    fontSize: '18px',
    '&:hover': {
      color: '#5341ae',
    },
  },
  credits__details: {
    color: '#ffffff',
    fontSize: '18px',
    textDecoration: 'none',
  },
  credits__yan__title: {
    color: '#388861',
    fontSize: '32px',
  },
  credits__details__marginYan: {
    marginLeft: '5px',
    marginRight: '5px',
    color: '#ffffff',
    fontSize: '18px',
    '&:hover': {
      color: '#388861',
    },
  },
})
