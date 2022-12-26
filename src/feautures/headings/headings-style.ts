import styled from 'styled-components'
import { colors } from '../../library'

export const HeadingsWrapper = styled.div`
  margin-bottom: 1.5rem;
`
export const HeadingTwo = styled.h2`
  display: flex;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
  color: ${colors.darkGrey};
  text-transform: uppercase;

  svg {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 745px) {
    font-size: 0.75rem;
  }
`

export const HeadingThree = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  color: ${colors.offWhite};

  @media screen and (max-width: 745px) {
    font-size: 1.6rem;
  }
`
