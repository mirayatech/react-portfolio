/* eslint-disable react/react-in-jsx-scope */
import { ToggleTheme } from '../toggle-theme/toggle-theme'
import { Link, Links, Nav, Wrapper } from './navbar-style'

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
      <Wrapper>
        <Links>
          <Link onClick={() => scrollToSection(home)} tabIndex={1}>
            Home
          </Link>
          <Link onClick={() => scrollToSection(about)} tabIndex={1}>
            About
          </Link>
          <Link onClick={() => scrollToSection(projects)} tabIndex={1}>
            Projects
          </Link>
          <Link onClick={() => scrollToSection(socials)} tabIndex={1}>
            Socials
          </Link>
          <Link onClick={() => scrollToSection(contact)} tabIndex={1}>
            Contact
          </Link>
        </Links>
        <ToggleTheme />
      </Wrapper>
    </Nav>
  )
}
