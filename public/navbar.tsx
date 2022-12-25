/* eslint-disable react/react-in-jsx-scope */
import { ToggleTheme } from '../toggle-theme/toggle-theme'
import { Link, Links, Nav } from './navbar-style'

import './navbar.css'
type NavbarProps = {
  scrollToSection: (elementRef: any) => void
  home: any
  about: any
  projects: any
  socials: any
  contact: any
}

export function Navbar({
  scrollToSection,
  home,
  about,
  projects,
  socials,
  contact,
}: NavbarProps) {
  return (
    <Nav>
      <Links>
        <Link onClick={() => scrollToSection(home)}>Home</Link>
        <Link onClick={() => scrollToSection(about)}>About</Link>
        <Link onClick={() => scrollToSection(projects)}>Projects</Link>
        <Link onClick={() => scrollToSection(socials)}>Socials</Link>
        <Link onClick={() => scrollToSection(contact)}>Contact</Link>
      </Links>
      <ToggleTheme />
    </Nav>
  )
}
