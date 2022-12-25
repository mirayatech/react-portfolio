/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react'
import { Navbar } from '../feautures'

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

      <div ref={home}>home</div>

      <div ref={about}>about</div>

      <div ref={projects}>projects</div>
    </>
  )
}
