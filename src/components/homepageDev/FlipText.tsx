import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const phrases = ['Full-stack Dev', 'Chef', 'AI Solutions Engineer', 'Physicist']

export const FlipText = () => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const sequence = setInterval(() => {
      setShow(false) // trigger exit
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length)
        setShow(true) // trigger enter
      }, 200) // match exit animation speed
    }, 2500) // total loop time

    return () => clearInterval(sequence)
  }, [])

  return (
    <div className="relative h-[2.5em] w-auto text-nowrap font-geistmono text-white opacity-50">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={phrases[index]}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute w-auto"
          >
            {phrases[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
