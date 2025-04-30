import kunalHomePageImg from '../../assets/kunalHomePage.jpg'

export const MainScreen = () => {
  return (
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
          I&apos;m a developer, designer and a physicist who understands how to
          bring your idea to life. I have experience helping local brands grow
          to designing complex web apps for the military.
        </p>
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
  )
}
