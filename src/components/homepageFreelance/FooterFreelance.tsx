export const FooterFreelance = () => {
  return (
    <div className="grid relative mt-[48rem] h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-black to-50%">
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
  )
}
