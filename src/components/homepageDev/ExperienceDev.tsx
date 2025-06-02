const experience = [
  {
    date: 'May, 2025 - Present',
    role: 'React Developer',
    company: 'Venuiti',
    link: 'https://venuitihealth.com/',
    stacks: ['react', 'typescript', 'jenkins', 'jira', 'vite', 'electron'],
    desc: 'Developed a new application by modifying and reusing exisitng in-house architecture and react codebase. Worked with the complex codebase and also talked to stakeholders to understand requirements. Created new Jenkins pipelines.  '
  },
  {
    date: 'Jan, 2025 - May 2025',
    role: 'Quantum Computer Undergraduate Researched',
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
    desc: 'Heled develop a new application template to be used within the military and lead the digitizing effort among other military organizations. Implemented a live text editor through QuillJS and websockets. '
  },
  {
    date: 'Jan, 2023 - May, 2023',
    role: 'Full Stack Developer',
    company: 'Royal Canadian Air Force',
    link: 'https://www.theflightdeck.ca/',
    stacks: ['golang', 'goFiber', 'postgreSQL', 'postman'],
    desc: 'Joined an existing complex project and helped develop + ship two features to users. Communicated with military members to understand requirements. First time building a website and had to learn Golang on the job. '
  }
]

export const ExperienceDev = () => {
  return (
    <>
      {' '}
      {experience.map((job, i) => (
        <div
          key={i}
          className="group rounded mt-4 flex flex-col gap-2 p-4 delay-150 duration-700 hover:bg-[#2E2E2E]/50 sm:flex-row sm:gap-4"
        >
          <p className="min-w-40 whitespace-nowrap text-[#D0D0D0] opacity-80">
            {job.date}
          </p>
          <div className="pl-8 text-white">
            <p className="font-medium text-white">
              <a
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:font-bold "
                href={job.link}
              >
                {job.company}
              </a>{' '}
              | {job.role}
            </p>
            <p className="font-extralight opacity-70">{job.desc}</p>
            <ul className="mr-4 mt-1 flex w-full flex-wrap justify-end gap-2 pr-12 opacity-60 transition delay-150 duration-700 ease-in-out group-hover:opacity-100">
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
    </>
  )
}
