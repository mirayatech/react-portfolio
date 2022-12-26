import styled from 'styled-components'
import { colors } from '../../library'
import { LinksMobile } from './socials-media-query'

const borderPink = ` 3px solid ${colors.green};`
const borderGrey = `1px solid ${colors.lightGrey}`

export const Links = styled.div`
  width: 100%;
  ${LinksMobile}
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, 20rem);
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
  border-bottom: ${borderPink};

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

  @media screen and (max-width: 680px) {
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
