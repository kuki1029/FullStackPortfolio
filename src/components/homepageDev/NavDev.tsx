const navLinks = [
  {
    name: 'Github',
    link: 'https://github.com/kuki1029'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/kunal-varkekar/'
  },
  {
    name: 'Email',
    link: 'mailto:pvarkeka@uwaterloo.ca'
  }
]

export const NavDev = () => {
  return (
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
  )
}
