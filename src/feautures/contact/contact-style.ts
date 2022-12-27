import styled from 'styled-components'
import { colors } from '../../library'

export const Text = styled.p`
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 2;
  color: ${colors.lightGrey};

  @media screen and (max-width: 745px) {
    font-size: 1rem;
  }
`
