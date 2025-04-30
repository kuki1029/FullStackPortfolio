/* eslint-disable tailwindcss/no-contradicting-classname */
// Disabled because using the gradient stops in bg which requires same classname
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { ProjectCards } from './ProjectCards'

const cardVariants: Variants = {
  offscreen: {
    y: '100vh'
  },
  onscreen: {
    y: '80vh',
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const AnimatedPopUp = () => {
  return (
    <div className="absolute grid min-h-screen w-full items-center justify-center overflow-hidden">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        className=" mx-auto h-[300vh] w-[110vw] rounded-t-[150px] bg-gradient-to-b from-[#BB73EB] from-0% via-[#FFAF75] via-25% to-[#ffffff] to-50% sm:rounded-t-[400px] "
      >
        {/* Title on floaty card */}
        <div className="flex h-96 place-content-center items-center">
          <h1 className="w-3/4 text-balance text-center text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-7xl">
            One webpage at a time, making your dream into reality
          </h1>
        </div>
        <ProjectCards />
        {/* Projects */}
      </motion.div>
    </div>
  )
}
