import { ExperienceDev } from './ExperienceDev'
import { FlipText } from './FlipText'
import { ProjectDev } from './ProjectDev'

const navLinks = [
  {
    name: 'Github',
    link: ''
  },
  {
    name: 'Linkedin',
    link: ''
  },
  {
    name: 'Email',
    link: ''
  }
]

export const MainScreenDev = () => {
  return (
    <div className="container mx-auto max-w-4xl bg-inherit p-4 pt-8">
      <div className="flex justify-between" id="header">
        <div>
          <p className="font-geistmono text-2xl font-bold text-white">Kunal</p>
          <FlipText />
        </div>
        <div className="flex flex-col font-geistmono text-white">
          {navLinks.map((nav) => (
            <a
              key={nav.name}
              className="opacity-50 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
              href={nav.link}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
      <div id="about" className="pt-24">
        <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">About Me</p>
        <p className="w-3/4  font-geistmono text-[#D0D0D0] opacity-70">
          a self taught full stack developer with a background in quantum
          physics. I specialize in unique solutions to unique problems. My
          speciality is my ability to work with no guidance or supervision but
          still produce excellent and timely results.
        </p>
      </div>
      <div id="experience" className="pt-24">
        <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">Experience</p>
        <ExperienceDev />
      </div>
      <div id="project" className="py-24">
        <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">Projects</p>
        <ProjectDev />
      </div>
    </div>
  )
}
