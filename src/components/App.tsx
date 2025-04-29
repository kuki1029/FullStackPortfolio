/* eslint-disable tailwindcss/no-contradicting-classname */
// Disabled because using the gradient stops in bg which requires same classname
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import kunalHomePageImg from '../assets/kunalHomePage.jpg'
import kunalTest from '../assets/kunalTest.jpg'
import { motion } from 'motion/react'
import teaClub from '../assets/teaClub.png'
import type { Variants } from 'motion/react'

const navigation = [
  { name: 'Work', href: '#' },
  { name: 'About', href: '#' },
  { name: "Let's Chat", href: '#' }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {' '}
      <ShaderGradientCanvas
        pointerEvents="none"
        style={{
          position: 'absolute',
          top: 0,
          height: '400vh'
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"
        />
        {/* https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false */}
      </ShaderGradientCanvas>
      {/* The content */}
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="h-8 w-auto text-2xl font-bold text-white">
                  Kunal
                </span>
              </a>
            </div>
            {/* Mobile responsiveness */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* Menu options. Only on lg */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl text-sm/6 font-bold text-[#f2e9e2] opacity-70"
                >
                  {/* TODO: Make color variable. Add hover */}
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          {/* Mobile menu for options */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        {/* Actual Content */}

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto h-screen max-w-2xl py-32 md:py-20">
            <div className="flex h-full place-content-center items-center">
              <div className="absolute top-[calc(50%-6rem)] mb-8 flex justify-center">
                <div className="rounded-full px-3 py-1 text-sm/6 text-neutral-50 ring-1 ring-neutral-50/30">
                  Currently accepting new clients.{' '}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-white"
                  >
                    <span aria-hidden="true" className="inset-0" />
                    Hire me <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-balance text-center text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-7xl">
                Extraordinary <br /> design made easy
              </h1>
            </div>
            <div
              className="mx-auto mt-[-15%] h-96 w-1/2 overflow-hidden shadow-2xl lg:h-96"
              style={{
                clipPath: `url(#squircleClip)`
              }}
            >
              <img
                style={{
                  clipPath: `url(#squircleClip)`
                }}
                alt=""
                src={kunalHomePageImg}
              />
            </div>
            <p className="mt-8 text-pretty text-center text-lg font-medium text-[#f2e9e2] sm:text-xl/8">
              I&apos;m a developer, designer and a physicist who understands how
              to bring your idea to life. I have experience helping local brands
              grow to designing complex web apps for the military.
            </p>
          </div>
        </div>
        <div className="absolute grid min-h-screen w-full items-center justify-center overflow-hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            className=" mx-auto h-[300vh] w-[110vw] rounded-t-[400px] bg-gradient-to-b from-[#BB73EB] from-0% via-[#FFAF75] via-25% to-[#ffffff] to-50% "
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
                  <p className="text-md absolute left-0 top-16 m-6 text-left text-[#f2e9e2]">
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

        {/* Rounding needed for above image */}
        <section>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
              <path
                fill="red"
                stroke="none"
                d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
              />
            </clipPath>
          </svg>
        </section>
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
