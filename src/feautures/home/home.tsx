import { Name, Welcoming, Characteristic, Summary } from './home-style'
import './home.css'
/* eslint-disable react/react-in-jsx-scope */
export default function Home() {
  return (
    <div>
      <Welcoming>hi&nbsp; there &nbsp;👋 , &nbsp;i&#39;m</Welcoming>
      <Name>miraya.</Name>
      <Characteristic>
        developer&nbsp;&nbsp; + &nbsp;&nbsp;designer
      </Characteristic>
      <Summary>
        I&#39;m a design-minded frontend developer focused on building beautiful
        interfaces and experiences.
      </Summary>
    </div>
  )
}
