import React from 'react'
import { motion } from 'framer-motion'

import styles from './warps.styles'

type WarpProps = {
  src: string
  name: string
}

const WarpCoordinates = ({ src, name }: WarpProps) => {
  return (
    <figure className={styles.puzzle3__warps__figure} id={name}>
      {src === '' ? (
        ''
      ) : (
        <motion.img
          className={styles.puzzle3__warps__figure__coord}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={src}
          alt={name}
        />
      )}
    </figure>
  )
}

export default WarpCoordinates
