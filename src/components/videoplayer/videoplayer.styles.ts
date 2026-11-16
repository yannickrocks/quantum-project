import { stylesheet } from 'typestyle'

import { mobile } from '../../styles/breakpoints'

const largeVideoReserve = '300px'
const largeVideoReserveOnMobile = '96px'

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
  videoLarge: {
    marginTop: 0,
  },
  iframeLarge: {
    width: `min(92vw, calc((100svh - ${largeVideoReserve}) * 16 / 9))`,
    height: 'auto',
    aspectRatio: '16 / 9',
    margin: 0,
    $nest: {
      [mobile]: {
        width: `min(100%, calc((100svh - ${largeVideoReserveOnMobile}) * 16 / 9))`,
      },
    },
  },
})
