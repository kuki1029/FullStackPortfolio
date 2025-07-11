const experience = [
  {
    date: 'May, 2025 - Present',
    role: 'React Developer',
    company: 'T6 Health Systems',
    link: 'https://t6.health/',
    stacks: ['react', 'typescript', 'jenkins', 'jira', 'vite', 'electron'],
    desc: 'Revamped an internal React app using existing architecture; collaborated with stakeholders to gather requirements. Created new Jenkins pipelines and significantly improved performance by implementing infinite loading. '
  },
  {
    date: 'Jan, 2025 - May 2025',
    role: 'Research Assistant',
    company: 'Institute Of Quantum Computing',
    link: 'https://uwaterloo.ca/institute-for-quantum-computing/',
    stacks: ['python', 'deformable mirror', 'laser', 'thorlabs'],
    desc: 'Helped develop high precision individual optical control for ion qubits by using adaptive optics. Worked directly on a state of the art quantum computer and collected data to help understand limitations of adaptive optics. '
  },
  {
    date: 'Sept, 2023 - Dec, 2023',
    role: 'Full Stack Developer',
    company: 'Canadian Department Of National Defence',
    link: 'https://www.canada.ca/en/department-national-defence.html',
    stacks: [
      'vueJS',
      'node',
      'typescript',
      'postgreSQL',
      'cypress',
      'microservices'
    ],
    desc: 'Helped develop a reusable application template to be used within the military and lead the digitizing effort among other military organizations. Implemented a live text editor through QuillJS and websockets. '
  },
  {
    date: 'Jan, 2023 - May, 2023',
    role: 'Full Stack Developer',
    company: 'Royal Canadian Air Force',
    link: 'https://www.theflightdeck.ca/',
    stacks: ['golang', 'goFiber', 'postgreSQL', 'postman'],
    desc: 'Joined a complex existing project and shipped multiple user-facing features. Collaborated with military personnel to gather requirements. Quickly ramped up by learning Golang on the job to build my first production web app.'
  }
]

export const ExperienceDev = () => {
  return (
    <div id="experience" className="pt-24">
      <p className="pb-8 font-hand text-4xl text-[#EA9A4F]">Experience</p>
      {experience.map((job, i) => (
        <div
          key={i}
          className="group  flex flex-col gap-2 rounded p-4 hover:bg-[#2E2E2E]/50 sm:flex-row sm:gap-4"
        >
          <p className="mr-8 min-w-40 whitespace-nowrap text-[#D0D0D0] opacity-80">
            {job.date}
          </p>
          <div className="text-white">
            <p className="font-medium text-white">
              {job.role} |{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-xs underline underline-offset-4 opacity-70 hover:font-bold "
                href={job.link}
              >
                {job.company}
              </a>{' '}
            </p>
            {/* JOB DESC */}
            <p className="text-md mt-2 font-geistmono font-extralight opacity-70 ">
              {job.desc}
            </p>
            <ul className="mr-4 mt-1 flex w-full flex-wrap justify-end gap-2 pt-2 opacity-60 transition delay-150 duration-700 ease-in-out group-hover:opacity-100">
              {job.stacks.map((stack, i) => (
                <li
                  key={i}
                  className="rounded border px-2  py-0.5 hover:border-[#EA9A4F] hover:text-[#EA9A4F]"
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
