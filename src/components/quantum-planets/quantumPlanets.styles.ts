import { stylesheet } from 'typestyle'

import { mobile } from '../../styles/breakpoints'

export default stylesheet({
  li: {
    maxWidth: '15%',
    $nest: {
      [mobile]: {
        maxWidth: 'none',
        width: 'calc((100% - 24px) / 3)',
      },
    },
  },
  planets__figure: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    $nest: {
      [mobile]: {
        width: '100%',
        minHeight: '64px',
        touchAction: 'manipulation',
      },
    },
  },
  planets__img: {
    width: '100%',
  },
  planets__moon: {
    width: '50%',
    margin: '0 auto',
  },
})
