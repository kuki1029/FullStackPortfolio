const experience = [
  {
    date: 'May, 2025 - Present',
    role: 'React Developer',
    company: 'Venuiti',
    link: 'https://venuitihealth.com/',
    desc: 'Developed a new application by modifying and reusing exisitng in-house architecture and react codebase. Worked with the complex codebase and also talked to stakeholders to understand requirements. '
  },
  {
    date: 'Jan, 2025 - May 2025',
    role: 'Quantum Computer Undergraduate Researched',
    company: 'Institute Of Quantum Computing',
    link: 'https://uwaterloo.ca/institute-for-quantum-computing/',
    desc: 'Helped develop high precision individual optical control for ion qubits by using adaptive optics. Worked directly on a state of the art quantum computer and collected data to help understand limitations of adaptive optics. '
  },
  {
    date: 'Sept, 2023 - Dec, 2023',
    role: 'Full Stack Developer',
    company: 'Canadian Department Of National Defence',
    desc: 'Heled develop a new application template to be used within the military and lead the digitizing effort among other military organizations.',
    link: 'https://www.canada.ca/en/department-national-defence.html'
  },
  {
    date: 'Jan, 2023 - May, 2023',
    role: 'Full Stack Developer',
    company: 'Royal Canadian Air Force',
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
          className="group mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4  hover:bg-opacity-50 hover:bg-[#2E2E2E]"
        >
          <p className="min-w-36 whitespace-nowrap text-[#D0D0D0] opacity-80">
            {job.date}
          </p>
          <div className="pl-8 text-white">
            <p className="font-medium text-white">
              {' '}
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
            <p className="font-extralight">{job.desc}</p>
            <ul className="text-gray-4 s:w-[50ch] mr-1 mt-1 flex w-full flex-wrap justify-end gap-2">
              <li className="text-highlight-blue border-muted-blue group-hover:border-highlight-blue rounded border px-2 py-0.5 transition-all duration-500 ease-in-out">
                test
              </li>
              <li className="border-gray-3 group-hover:text-gray-6 group-hover:border-gray-4 rounded border px-2 py-0.5 transition-all duration-500 ease-in-out">
                test2
              </li>
              <li className="border-gray-3 group-hover:text-gray-6 group-hover:border-gray-4 rounded border px-2 py-0.5 transition-all duration-500 ease-in-out">
                react
              </li>
              <li className="border-gray-3 group-hover:text-gray-6 group-hover:border-gray-4 rounded border px-2 py-0.5 transition-all duration-500 ease-in-out">
                postgresql
              </li>
              <li className="border-gray-3 group-hover:text-gray-6 group-hover:border-gray-4 rounded border px-2 py-0.5 transition-all duration-500 ease-in-out">
                tailwind
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}
