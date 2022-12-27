import React from 'react'
import { Headings } from '../headings/headings'
import { Link, Text } from './about-style'

export default function About() {
  const title = 'About'
  const subtitle = "Hi, I'm Miraya."

  return (
    <div>
      <Headings title={title} subtitle={subtitle} />

      <Text>
        I&#39;m a 20 year old self taught frontend developer. I found my passion
        for programming after discovering my brother was doing it. What kept me
        on this journey is that I always find it exciting to learn new things
        and challenges I&#39;m unfamiliar with. I currently work as a frontend
        developer at{' '}
        <Link href="https://www.check24.de/" target={'_blank'} rel="noreferrer">
          CHECK24
        </Link>
        . When I&#39;m not doing anything coding-related, I enjoy spending time
        with my family and working out.
      </Text>
    </div>
  )
}
