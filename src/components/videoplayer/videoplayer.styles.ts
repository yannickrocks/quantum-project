import { stylesheet } from 'typestyle'

import { mobile } from '../../styles/breakpoints'

export default stylesheet({
  video: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-60px',
    $nest: {
      [mobile]: {
        marginTop: 0,
      },
    },
  },
  iframe: {
    border: 'none',
    marginTop: '30px',
    marginBottom: '30px',
    $nest: {
      [mobile]: {
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 9',
        maxWidth: '100%',
        marginTop: '16px',
        marginBottom: '16px',
      },
    },
  },
})
