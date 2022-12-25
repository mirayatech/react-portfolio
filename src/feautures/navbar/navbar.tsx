/* eslint-disable react/react-in-jsx-scope */
import { Link, Links, Nav, Wrapper } from './navbar-style'

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
          <Link onClick={() => scrollToSection(home)}>Home</Link>
          <Link onClick={() => scrollToSection(about)}>About</Link>
          <Link onClick={() => scrollToSection(projects)}>Projects</Link>
          <Link onClick={() => scrollToSection(socials)}>Socials</Link>
          <Link onClick={() => scrollToSection(contact)}>Contact</Link>
        </Links>
      </Wrapper>
    </Nav>
  )
}
