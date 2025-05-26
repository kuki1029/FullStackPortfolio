export const FooterFreelance = () => {
  return (
    <div className="relative mt-[48rem] grid h-auto w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-black to-50% pb-10">
      <div className="mt-32 flex w-screen flex-col px-16">
        <a
          href="mailto:pvarkeka@uwaterloo.ca"
          className="flex flex-col justify-between gap-12 border-y-[3px] py-4 opacity-60 transition delay-150 duration-700 ease-in-out hover:opacity-100 sm:flex-row"
        >
          <p className="text-balance text-center text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-7xl">
            I&apos;d love to chat!
          </p>
          <button className="rounded-full bg-[#f2e9e2] px-16 text-4xl font-medium text-black">
            Let&apos;s talk
          </button>
        </a>
        <div className="mt-32 grid w-full justify-items-start  sm:grid-flow-col">
          <div>
            <p className="text-balance text-left text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-[10rem]">
              Kunal
            </p>
            <a href="mailto:pvarkeka@uwaterloo.ca">
              <p
                id="about"
                className="text-balance text-left font-semibold tracking-tight text-[#f2e9e2] opacity-70 sm:ml-3 sm:text-base"
              >
                Reach out! pvarkeka@uwaterloo.ca
              </p>
            </a>
            <p
              id="about"
              className="text-balance text-left font-semibold tracking-tight text-[#f2e9e2] opacity-70 sm:ml-3 sm:text-base"
            >
              Kunal is graduate from the University Of Waterloo. He brings a
              unique skill set with his degree in AstroPhysics but work
              experience in web development. He loves to travel and explore food
              culture around the world!
            </p>
          </div>
          <div className="flex flex-col font-semibold text-[#f2e9e2]">
            <a href="#" className="mt-10 hover:-translate-y-1">
              Home
            </a>
            {/* TODO: Add seperate about page */}
            <a href="#about" className="mt-8 hover:-translate-y-1">
              About
            </a>
            <a href="/dev" className="mt-8 hover:-translate-y-1">
              Dev
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
