/* eslint-disable react/react-in-jsx-scope */
import { ToggleTheme } from '../toggle-theme/toggle-theme'
import { Link, Links, Nav } from './navbar-style'

import './navbar.css'
export function Navbar() {
  return (
    <Nav>
      <Links>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#socials">Socials</Link>
        <Link href="#contact">Contact</Link>
      </Links>
      <ToggleTheme />
    </Nav>
  )
}
