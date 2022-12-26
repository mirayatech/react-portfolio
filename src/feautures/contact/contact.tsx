import { Headings } from '../headings/headings'
import { Text } from './contact-style'

/* eslint-disable react/react-in-jsx-scope */
export function Contact() {
  const title = 'Contact'
  const subtitle = "Look Who's Here"

  return (
    <>
      <Headings title={title} subtitle={subtitle} />
      <Text>
        The fastest way to get in touch with me is to send me a DM on Instagram,
        whether it&#39;s a question or wants to say hi, I&#39;ll try my best to
        get back to you.
      </Text>
    </>
  )
}
