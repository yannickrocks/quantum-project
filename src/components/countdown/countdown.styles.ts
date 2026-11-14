import { stylesheet } from 'typestyle'

import { mobile } from '../../styles/breakpoints'

export default stylesheet({
  timer: {
    color: '#ffffff',
    fontSize: '40px',
    $nest: {
      [mobile]: {
        fontSize: 'clamp(32px, 11vw, 40px)',
      },
    },
  },
})
