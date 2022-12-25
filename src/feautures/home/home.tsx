import { Name, Welcoming, Characteristic, Summary, Wrapper } from './home-style'
/* eslint-disable react/react-in-jsx-scope */
export function Home() {
  return (
    <Wrapper>
      <div>
        <Welcoming>hi&nbsp; there &nbsp;👋 , &nbsp;i&#39;m</Welcoming>
        <Name>miraya.</Name>
        <Characteristic>
          developer&nbsp;&nbsp; + &nbsp;&nbsp;designer
        </Characteristic>
        <Summary>
          I&#39;m a design-minded frontend developer focused on building
          beautiful interfaces and experiences.
        </Summary>
      </div>

      <img
        src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-cat-with-smiling-eyes_1f638.png"
        alt=""
      />
    </Wrapper>
  )
}
