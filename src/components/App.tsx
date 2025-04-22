import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import kunalHomePageImg from '../assets/kunalHomePage.jpg'

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
        style={{
          position: 'absolute',
          top: 0,
          height: '200vh'
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
                  Kunal{' '}
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-neutral-50 ring-1 ring-neutral-50/30">
                Currently accepting new clients.{' '}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-white"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Hire me <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-neutral-50 sm:text-7xl">
                Extraordinary design made easy
              </h1>
              <div className="mt-12 h-60 w-1/2 overflow-hidden rounded-[15%] bg-blend-multiply shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:h-96">
                <img className="opacity-100" alt="" src={kunalHomePageImg} />
              </div>
              <p className="mt-8 text-pretty text-lg font-medium text-[#f2e9e2] sm:text-xl/8">
                I&apos;m a developer, designer and a physicist who understands
                how to bring your idea to life. I have experience helping local
                brands grow to designing complex web apps for the military.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
