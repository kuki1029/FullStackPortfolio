import { useState } from 'react'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

const navigation = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: "Let's Chat", href: 'mailto:pvarkeka@uwaterloo.ca' }
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <DesktopHeader
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  )
}
