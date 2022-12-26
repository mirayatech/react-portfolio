/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import {
  Github,
  Instagram,
  ThreeBars,
  TikTok,
  Twitter,
  TwoBars,
  YouTube,
} from '../../library'
import { Grid, Links, Menu, Nav, Navigation, Wrapper } from './navbar-style'

type NavbarProps = {
  scrollToSection: (elementRef: any) => void
  home: any
  about: any
  projects: any
  contact: any
}

export function Navbar({
  scrollToSection,
  home,
  about,
  projects,
  contact,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (event: any) => {
    setIsOpen(false)
    scrollToSection(event)
  }

  return (
    <Nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <TwoBars /> : <ThreeBars />}
      </button>
      {isOpen && (
        <Menu>
          <Navigation>
            <h1>Navigation</h1>

            <Wrapper>
              <span onClick={() => handleOnClick(home)}>Home</span>
              <span onClick={() => handleOnClick(about)}>About</span>
              <span onClick={() => handleOnClick(projects)}>Projects</span>
              <span onClick={() => handleOnClick(contact)}>Contact</span>
            </Wrapper>
          </Navigation>

          <Links>
            <h1>On the web</h1>
            <Grid>
              <a
                href="https://github.com/mirayatech"
                target={'_blank'}
                rel="noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.instagram.com/mirayatech/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/@mirayatech."
                target={'_blank'}
                rel="noreferrer"
              >
                <YouTube />
              </a>
              <a
                href="https://www.tiktok.com/@mirayatech"
                target={'_blank'}
                rel="noreferrer"
              >
                <TikTok />
              </a>
              <a
                href="https://twitter.com/mirayadev"
                target={'_blank'}
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </Grid>
          </Links>
        </Menu>
      )}
    </Nav>
  )
}
