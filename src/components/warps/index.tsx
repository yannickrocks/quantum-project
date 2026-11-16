import { AnimatePresence, motion } from 'motion/react'

import styles from './warps.styles'

type WarpProps = {
  src: string
  name: string
}

const WarpCoordinates = ({ src, name }: WarpProps) => {
  return (
    <span className={styles.puzzle3__warps__figure} id={name}>
      <AnimatePresence initial={false}>
        {src !== '' && (
          <motion.img
            key={src}
            className={styles.puzzle3__warps__figure__coord}
            variants={{ hover: { scale: 1.1 }, tap: { scale: 0.9 } }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.15 } }}
            src={src}
            alt={name}
          />
        )}
      </AnimatePresence>
    </span>
  )
}

export default WarpCoordinates
