import teaClub from '../../assets/teaClub.png'

const projects = [
  {
    name: 'Tea Society',
    description:
      'Designed an unique and eye catching website to help the local Tea Society gain members and almost quadruple in size over a few months.',
    image: teaClub
  },
  {
    name: 'Slite',
    description:
      'Designed an unique and eye catching website to help the local Tea Society gain members and almost quadruple in size over a few months.',
    image: teaClub
  },
  {
    name: 'Unami',
    description:
      'Designed an unique and eye catching website to help the local Tea Society gain members and almost quadruple in size over a few months.',
    image: teaClub
  }
]

export const ProjectCards = () => {
  return (
    <div className="mt-48 flex w-full place-content-center items-center pb-32">
      {/* Project Cards */}
      <div className="mt-8 grid w-screen gap-4 px-8 sm:grid-cols-1 sm:gap-12 sm:px-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative w-full overflow-hidden rounded-[3rem] text-center"
          >
            <a href="http://www.google.com" target="_blank" rel="noreferrer">
              <img
                className="mx-auto size-full rounded-3xl object-cover object-center transition delay-150 duration-700 group-hover:-translate-y-1 group-hover:scale-110"
                src={project.image}
                alt="avatar"
              ></img>
            </a>
            <button className="absolute left-0 top-0 m-6 rounded bg-[#f2e9e2]/10 p-2 text-4xl  text-[#f2e9e2] backdrop-blur transition duration-300 ease-in group-hover:bg-[#f2e9e2]/30">
              {project.name}
            </button>
            <p className="absolute left-2 top-20 m-6 text-left text-lg text-[#f2e9e2]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
