import { Children, type ReactNode } from 'react'
import { motion } from 'motion/react'

type FadeInProps = {
  delay?: number
  transitionDuration?: number
  children?: ReactNode
}

const FadeIn = ({
  delay = 50,
  transitionDuration = 400,
  children,
}: FadeInProps) => (
  <div>
    {Children.map(children, (child, index) => (
      <motion.div
        initial={{ opacity: 0, y: 20, visibility: 'hidden' }}
        animate={{ opacity: 1, y: 0, visibility: 'visible' }}
        transition={{
          duration: transitionDuration / 1000,
          delay: (delay * (index + 1)) / 1000,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {child}
      </motion.div>
    ))}
  </div>
)

export default FadeIn
