/* eslint-disable react/react-in-jsx-scope */
import {
  Github,
  Instagram,
  Line,
  TikTok,
  Twitter,
  YouTube,
} from '../../library'
import { Heading, Link, Links } from './socials-style'

export function Socials() {
  return (
    <div>
      <Heading>
        <h2>
          MORE OF MY WORKS
          <Line />
        </h2>

        <h3>On The Web 🌐</h3>
      </Heading>

      <Links>
        <Link href="https://github.com/mirayatech" target={'_blank'}>
          <span>GitHub</span>
          <Github />
        </Link>
        <Link href="https://www.instagram.com/mirayatech/" target={'_blank'}>
          <span> Instagram</span>
          <Instagram />
        </Link>
        <Link href="https://www.youtube.com/@mirayatech." target={'_blank'}>
          <span>YouTube</span>
          <YouTube />
        </Link>
        <Link href="https://www.tiktok.com/@mirayatech" target={'_blank'}>
          <span>TikTok</span>
          <TikTok />
        </Link>
        <Link href="https://twitter.com/mirayadev" target={'_blank'}>
          <span>Twitter</span>
          <Twitter />
        </Link>
      </Links>
    </div>
  )
}
