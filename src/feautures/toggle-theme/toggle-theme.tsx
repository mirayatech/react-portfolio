/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prefer-const */

import { useState } from 'react'
import { Moon, Sun } from '../../library'
import { Button } from './toggle-theme-style'

export const ToggleTheme = () => {
  const [isClicked, setIsClicked] = useState(false)

  let clickedClass = 'clicked'
  const body = document.body
  const lightTheme = 'light'
  const darkTheme = 'dark'
  let theme: any

  if (localStorage) {
    theme = localStorage.getItem('theme')
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = (event: any) => {
    if (theme === darkTheme) {
      setIsClicked(false)

      body.classList.replace(darkTheme, lightTheme)
      event.target.classList.remove(clickedClass)
      localStorage.setItem('theme', 'light')
      theme = lightTheme
    } else {
      setIsClicked(true)

      body.classList.replace(lightTheme, darkTheme)
      event.target.classList.add(clickedClass)
      localStorage.setItem('theme', 'dark')
      theme = darkTheme
    }
  }

  return (
    <Button onClick={(event: any) => switchTheme(event)} className="button">
      {isClicked ? <Moon className="moon" /> : <Sun className="sun" />}
    </Button>
  )
}
