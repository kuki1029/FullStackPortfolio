type NavItem = {
  name: string
  href: string
}

export type Iprops = {
  mobileMenuOpen?: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  navigation: NavItem[]
}
