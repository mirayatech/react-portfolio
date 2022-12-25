import styled from 'styled-components'
import { colors } from '../../library'

export const container = styled.div`
  padding-top: 100px;
`

export const Heading = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    color: ${colors.darkGrey};
    text-transform: uppercase;

    svg {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    color: ${colors.offWhite};
  }
`

export const Text = styled.p`
  max-width: 800px;
  font-size: 1.1rem;
  color: ${colors.lightGrey};
`
