/* eslint-disable react/react-in-jsx-scope */
import { Github, Instagram, TikTok, Twitter, YouTube } from '../../library'
import { Headings } from '../headings/headings'
import { Link, Links } from './socials-style'

export function Socials() {
  const title = 'On The Web'
  const subtitle = 'More of my works'
  return (
    <div>
      <Headings title={title} subtitle={subtitle} />

      <Links>
        <Link href="https://github.com/mirayatech" target={'_blank'}>
          GitHub
          <Github />
        </Link>
        <Link href="https://www.instagram.com/mirayatech/" target={'_blank'}>
          Instagram
          <Instagram />
        </Link>
        <Link href="https://www.youtube.com/@mirayatech." target={'_blank'}>
          YouTube
          <YouTube />
        </Link>
        <Link href="https://www.tiktok.com/@mirayatech" target={'_blank'}>
          TikTok
          <TikTok />
        </Link>
        <Link href="https://twitter.com/mirayadev" target={'_blank'}>
          Twitter
          <Twitter />
        </Link>
      </Links>
    </div>
  )
}
