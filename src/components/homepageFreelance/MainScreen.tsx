import img2 from '../../assets/34.jpg'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const MainScreen = () => {
  return (
    <div className="relative isolate mx-auto h-screen max-w-2xl px-6 py-32 pt-14 md:py-20 lg:px-8">
      <div className="relative flex h-full place-content-center items-center">
        <div className="group absolute top-[calc(50%-8rem)] mb-8 flex flex-row justify-center">
          <div className="rounded-full px-3 py-1 text-xs/6 text-neutral-50 ring-1 ring-neutral-50/30 ">
            <a href="mailto:pvarkeka@uwaterloo.ca">
              <p className="inline size-6">
                Currently accepting new clients &nbsp;
              </p>
              <ArrowRightIcon className="inline size-8 group-hover:text-[#DDA0DD]" />
            </a>
          </div>
        </div>
        <h1 className="text-balance text-center text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-7xl">
          Extraordinary <br /> design made easy
        </h1>
      </div>
      <div className="mx-auto h-96 w-64 overflow-hidden rounded-3xl shadow-2xl">
        <img className="rounded-3xl grayscale" alt="" src={img2} />
      </div>
      <p className="mt-8 text-pretty text-center text-lg font-medium text-[#f2e9e2] sm:text-xl/8">
        I&apos;m a developer, designer and a physicist who understands how to
        bring your idea to life. I have experience helping local brands grow to
        designing complex web apps for the military.
      </p>
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
  )
}
