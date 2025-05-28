export const MainScreenDev = () => {
  return (
    <div className="container mx-auto bg-inherit pt-8">
      <div className="flex justify-between" id="header">
        <div>
          <p className="font-geistmono text-2xl font-bold text-white">Kunal</p>
          <p className="font-geistmono text-white opacity-50">role</p>
        </div>
        <div className="flex flex-col font-geistmono text-white">
          <a className="opacity-50 hover:opacity-100" href="">
            Github
          </a>
          <a href="opacity-50 hover:opacity-100">Linkedin</a>
          <a href="opacity-50 hover:opacity-100">Email</a>
        </div>
      </div>
      <div id="about" className="pt-24">
        <p className="font-geistmono font-bold text-[#D0D0D0] opacity-70">
          about me
        </p>
      </div>
      <div id="experience" className="pt-24">
        <p className="font-geistmono text-white">Experience</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 py-4 text-[0.85rem]">
          <p className="opacity-80 min-w-fit">July, 2021 - Present</p>
          <div>
            <p className="font-medium">
              {' '}
              <a
                target="_blank"
                className=" underline underline-offset-4 hover:font-bold "
                href=""
              >
                123
              </a>{' '}
              Example
            </p>
            <p>
              Test
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
