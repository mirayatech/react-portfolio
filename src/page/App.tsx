/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react'
import { Contact, Home, Navbar, Projects, Socials } from '../feautures'

import { Primary, Secondary, Tertiary } from './app-style'

export default function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const socials = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        projects={projects}
        socials={socials}
        contact={contact}
      />

      <Primary ref={home}>
        <Home />
      </Primary>

      <Secondary ref={projects}>
        <Projects />
      </Secondary>

      <Tertiary>
        <div ref={socials}>
          <Socials />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </Tertiary>
    </>
  )
}
