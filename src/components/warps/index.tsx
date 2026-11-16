import { motion } from 'motion/react'

import styles from './warps.styles'

type WarpProps = {
  src: string
  name: string
}

const WarpCoordinates = ({ src, name }: WarpProps) => {
  return (
    <span className={styles.puzzle3__warps__figure} id={name}>
      {src === '' ? (
        ''
      ) : (
        <motion.img
          className={styles.puzzle3__warps__figure__coord}
          variants={{ hover: { scale: 1.1 }, tap: { scale: 0.9 } }}
          src={src}
          alt={name}
        />
      )}
    </span>
  )
}

export default WarpCoordinates
