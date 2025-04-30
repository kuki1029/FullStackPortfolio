import { Bars3Icon } from '@heroicons/react/24/outline'
import { Iprops } from './headerTypes'

export const DesktopHeader = ({ setMobileMenuOpen, navigation }: Iprops) => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="h-8 w-auto text-2xl font-bold text-white">
            Kunal
          </span>
        </a>
      </div>
      {/* Mobile responsiveness */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>
      {/* Menu options. Only on lg */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-2xl text-sm/6 font-bold text-[#f2e9e2] opacity-70"
          >
            {/* TODO: Make color variable. Add hover */}
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
