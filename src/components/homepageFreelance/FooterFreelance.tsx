export const FooterFreelance = () => {
  return (
    <div className="grid relative mt-[48rem] h-auto pb-10 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-black to-50%">
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
        <div className="mt-32 grid w-full justify-items-start  sm:grid-flow-col">
          <div>
            <p className="text-balance text-left text-5xl font-semibold tracking-tight text-[#f2e9e2] sm:text-[10rem]">
              Kunal
            </p>
            <p
              id="about"
              className="text-balance text-left sm:ml-3 font-semibold tracking-tight opacity-70 text-[#f2e9e2] sm:text-md"
            >
              Kunal is graduate from the University Of Waterloo. He brings a
              unique skill set with his degree in AstroPhysics but work
              experience in web development. He loves to travel and explore food
              culture around the world!
            </p>
          </div>
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
  )
}
