import { ExperienceDev } from './ExperienceDev'
import { FlipText } from './FlipText'
import { NavDev } from './NavDev'
import { ProjectDev } from './ProjectDev'

export const MainScreenDev = () => {
  return (
    <div className="container mx-auto max-w-4xl bg-inherit p-4 pt-8">
      {/* Header */}
      <div className="flex justify-between" id="header">
        <div>
          <p className="font-geistmono text-2xl font-bold text-white">Kunal</p>
          <FlipText />
        </div>
        <NavDev />
      </div>
      {/* About ME */}
      <div id="about" className="pt-24">
        <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">About Me</p>
        <p className="w-3/4  font-geistmono text-[#D0D0D0] opacity-70">
          a self taught full stack developer with a background in quantum
          physics. I specialize in unique solutions to unique problems. My
          speciality is my ability to work with no guidance or supervision but
          still produce excellent and timely results.
        </p>
      </div>
      <ExperienceDev />
      <ProjectDev />
    </div>
  )
}
