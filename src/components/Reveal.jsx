import { motion } from 'framer-motion'

/**
 * Subtle fade + rise entrance animation, triggered once when the element
 * scrolls into view. Kept intentionally minimal per the site's "no
 * unnecessary animation" direction.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
