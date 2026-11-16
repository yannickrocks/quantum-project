import { stylesheet } from 'typestyle'

import { focusRing, mobile, unstyledButton } from '../../styles/breakpoints'

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
  planets__button: {
    ...unstyledButton,
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    $nest: {
      '&:focus-visible': focusRing,
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
