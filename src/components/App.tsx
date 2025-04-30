/* eslint-disable tailwindcss/no-contradicting-classname */
// Disabled because using the gradient stops in bg which requires same classname
import { motion } from 'motion/react'
import teaClub from '../assets/teaClub.png'
import type { Variants } from 'motion/react'
import { BackgroundShader } from './backgroundShader'
import { Header } from './header/Header'
import { MainScreen } from './homepageFreelance/MainScreen'

function App() {
  return (
    <>
      <BackgroundShader />
      <div className="bg-white">
        <Header />
        {/* Actual Content */}
        <MainScreen />

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
            {/* Projects */}
            <div className="mt-48 flex w-full place-content-center items-center">
              {/* Project Cards */}
              <div className="mt-8 grid w-screen gap-4 px-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <div className="group relative w-full overflow-hidden rounded-3xl text-center">
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mx-auto size-full rounded-3xl object-cover object-center transition delay-150 duration-700 group-hover:-translate-y-1 group-hover:scale-110"
                      src={teaClub}
                      alt="avatar"
                    ></img>
                  </a>
                  <button className="absolute left-0 top-0 m-6 rounded bg-[#f2e9e2]/10 p-2 text-2xl  text-[#f2e9e2] backdrop-blur transition duration-300 ease-in group-hover:bg-[#f2e9e2]/30">
                    Tea Society
                  </button>
                  <p className="absolute left-0 top-16 m-6 text-left text-lg text-[#f2e9e2]">
                    Designed an unique and eye catching website to help the
                    local Tea Society gain members and almost quadruple in size
                    over a few months.
                  </p>
                </div>
                <div className="group relative w-full overflow-hidden rounded-3xl text-center">
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mx-auto size-full rounded-3xl object-cover object-center transition delay-150 duration-700 group-hover:-translate-y-1 group-hover:scale-110"
                      src={teaClub}
                      alt="avatar"
                    ></img>
                  </a>
                  <button className="absolute left-0 top-0 m-6 rounded bg-[#f2e9e2]/10 p-2 text-[#f2e9e2] backdrop-blur transition duration-300 ease-in group-hover:bg-[#f2e9e2]/30">
                    Tea Society
                  </button>
                  <p className="absolute left-0 top-16 m-6 text-left text-xs text-[#f2e9e2]">
                    Created an one of a kind webpage for a local society and
                    helped them grow one of the most famous local societies in
                    the area.
                  </p>
                </div>
                <div className="group relative w-full overflow-hidden rounded-3xl text-center">
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mx-auto size-full rounded-3xl object-cover object-center transition delay-150 duration-700 group-hover:-translate-y-1 group-hover:scale-110"
                      src={teaClub}
                      alt="avatar"
                    ></img>
                  </a>
                  <button className="absolute left-0 top-0 m-6 rounded bg-[#f2e9e2]/10 p-2 text-[#f2e9e2] backdrop-blur transition duration-300 ease-in group-hover:bg-[#f2e9e2]/30">
                    Tea Society
                  </button>
                  <p className="absolute left-0 top-16 m-6 text-left text-xs text-[#f2e9e2]">
                    Created an one of a kind webpage for a local society and
                    helped them grow one of the most famous local societies in
                    the area.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-[400vh] grid h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-black to-50%">
          <div className="mt-32 flex w-screen flex-col px-16">
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between gap-12 border-y-[3px] py-4 opacity-60 transition delay-150 duration-700 ease-in-out hover:opacity-100 sm:flex-row"
            >
              <p className="text-balance text-center text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-7xl">
                I&apos;d love to talk!
              </p>
              <button className="rounded-full bg-[#f2e9e2] px-16 text-4xl font-medium text-black">
                Let&apos;s talk
              </button>
            </a>
            <div className="mt-32 grid w-full justify-stretch px-16 sm:grid-flow-col">
              <p className="text-balance text-left text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-[10rem]">
                Kunal
              </p>
              <div className="flex flex-col font-semibold text-[#f2e9e2]">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 hover:-translate-y-1"
                >
                  Home
                </a>
                {/* TODO: Add seperate about page */}
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 hover:-translate-y-1"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
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

export default App
