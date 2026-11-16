import { Children, type ReactNode } from 'react'
import { MotionConfig, motion } from 'motion/react'

type FadeInProps = {
  delay?: number
  transitionDuration?: number
  isShown?: boolean
  children?: ReactNode
}

const FadeIn = ({
  delay = 200,
  transitionDuration = 800,
  isShown = true,
  children,
}: FadeInProps) => (
  <MotionConfig reducedMotion="user">
    <div>
      {Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' }}
          animate={
            isShown ? { opacity: 1, y: 0, visibility: 'visible' } : undefined
          }
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
  </MotionConfig>
)

export default FadeIn
