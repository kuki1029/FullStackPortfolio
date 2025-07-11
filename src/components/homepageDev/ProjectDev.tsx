import { ProjectButtons } from './ProjectButtons'

const projects = [
  {
    name: 'Tea Society',
    desc: 'A showcase website for one of the best clubs in Waterloo. Displaying its aesthetic in the purest possible form. ',
    demo: 'https://tea.imkunal.ca/',
    repo: 'https://github.com/kuki1029',
    status: true
  },
  {
    name: 'Quantum Exhibit',
    desc: 'An elegant physics display of natural phenomenan to help people better understand the world around us. ',
    demo: 'https://physics.imkunal.ca/',
    repo: 'https://github.com/kuki1029/QuantumExhibit',
    status: true
  },
  {
    name: 'Chatique',
    desc: 'A chatting app to learn websockets and real time communication. Stashed to focus on other projects but functional.',
    demo: 'https://chat.imkunal.ca/',
    repo: 'https://github.com/kuki1029/chatapp',
    status: true
  }
]

export const ProjectDev = () => {
  return (
    <div id="project" className="py-24 ">
      <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">Projects</p>
      <div className="pl-4 font-geistmono text-white">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded pb-4 transition-all hover:bg-[#2E2E2E]/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:underline"
                >
                  {project.name}
                </a>
                <p
                  className={`flex items-center gap-1 ${project.status ? 'text-green-500' : 'text-[#EA9A4F]'}`}
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                    </svg>
                  </span>{' '}
                  <span className="w-0 overflow-hidden text-xs transition-[width] duration-500 ease-in-out group-hover:w-full">
                    {project.status ? 'complete' : 'wip'}
                  </span>
                </p>
              </div>
              <ProjectButtons repo={project.repo} demo={project.demo} />
            </div>
            <p className="mt-1 text-sm font-extralight opacity-70">
              {project.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
