import { ExperienceDev } from './ExperienceDev'

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
        <p className="font-geistmono  text-[#D0D0D0] opacity-70">
          a self taught full stack developer with a background in quantum
          physics. I specialize in unique solutions to unique problems. My
          speciality is my ability to work with no guidance or supervision but
          still produce excellent and timely results.
        </p>
      </div>
      <div id="experience" className="pt-24">
        <p className="font-geistmono text-white pb-8">Experience</p>
        <ExperienceDev />
      </div>
    </div>
  )
}
