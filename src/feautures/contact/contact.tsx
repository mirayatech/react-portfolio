import { Line } from '../../library'
import { Container } from '../projects/project-style'
import { Heading, Text } from './contact-style'

/* eslint-disable react/react-in-jsx-scope */
export function Contact() {
  return (
    <Container>
      <Heading>
        <h2>
          Contact
          <Line />
        </h2>

        <h3>Look Who&#39;s Here </h3>
      </Heading>

      <Text>
        The fastest way to get in touch with me is to send me a DM on Instagram,
        whether it&#39;s a question or wants to say hi, I&#39;ll try my best to
        get back to you.
      </Text>
    </Container>
  )
}
