/* eslint-disable tailwindcss/no-contradicting-classname */
// Disabled because using the gradient stops in bg which requires same classname
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { ProjectCards } from './ProjectCards'
import { FooterFreelance } from './FooterFreelance'

const cardVariants: Variants = {
  offscreen: {
    y: '120vh'
  },
  onscreen: {
    y: '100vh',
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const AnimatedPopUp = () => {
  return (
    <div className="absolute h-auto grid min-h-screen w-full items-center justify-center overflow-hidden">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        className=" mx-auto h-auto w-[110vw] rounded-t-[150px] bg-gradient-to-b from-[#BB73EB] from-0% via-[#FFAF75] via-25% to-[#ffffff] to-50% sm:rounded-t-[400px] "
      >
        {/* Title on floaty card */}
        <div className="flex h-96 place-content-center items-center">
          <h1
            id="work"
            className="w-3/4 text-balance text-center text-5xl font-light tracking-tight text-[#f2e9e2] sm:text-7xl"
          >
            Turning business ideas into successful startups
          </h1>
        </div>
        <ProjectCards />

        {/* Projects */}
      </motion.div>
      <FooterFreelance />
    </div>
  )
}
