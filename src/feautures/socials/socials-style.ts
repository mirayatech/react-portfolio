import styled from 'styled-components'
import { colors } from '../../library'

const borderBlue = ` 3px solid ${colors.blue};`
const borderGrey = `1px solid ${colors.lightGrey}`

export const Links = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: auto auto auto;

  @media screen and (max-width: 1000px) {
    grid-gap: 2rem;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 2rem;
    grid-template-columns: auto;
  }
`

export const Link = styled.a`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.lightGrey};

  padding: 1.5rem;
  border: ${borderGrey};
  transition: all 0.2s ease;
  border-bottom: ${borderBlue};

  :hover {
    color: ${colors.offWhite};
  }

  svg {
    align-self: baseline;
    font-size: 1.6rem;
  }

  :nth-child(4) svg {
    font-size: 1.4rem;
  }

  :last-child svg {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 745px) {
    font-size: 1rem;

    svg {
      font-size: 1.3rem;
    }

    :nth-child(4) svg {
      font-size: 1.2rem;
    }

    :last-child svg {
      font-size: 1.4rem;
    }
  }
`
