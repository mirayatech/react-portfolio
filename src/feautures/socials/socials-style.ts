import styled from 'styled-components'
import { colors } from '../../library'

export const Heading = styled.div`
  margin-bottom: 3rem;

  h2 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    color: ${colors.grey};
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

export const Links = styled.div`
  width: 75rem;
  display: grid;
  grid-gap: 4rem;
  position: relative;
  grid-template-columns: repeat(auto-fit, 21.875rem);
  justify-content: space-between;
`

export const Link = styled.a`
  display: flex;
  padding: 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  align-items: center;
  color: ${colors.grey};
  transition: all 0.2s ease;
  border-bottom: 3px solid #f4d2fe;
  justify-content: space-between;
  border-top: 1px solid ${colors.grey};
  border-left: 1px solid ${colors.grey};
  border-right: 1px solid ${colors.grey};

  :hover span {
    color: ${colors.offWhite};
  }

  span {
    transition: all 0.2s ease;
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
`
