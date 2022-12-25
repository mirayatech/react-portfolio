import styled from 'styled-components'
import { colors, linearGardient } from '../../library'
export const Container = styled.div`
  padding-top: 100px;
`

export const Heading = styled.div`
  margin-bottom: 2rem;

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

export const Grid = styled.div`
  width: 75rem;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, 22rem);
  justify-content: space-between;
`

export const Card = styled.div`
  height: 20rem;
  display: flex;
  padding: 1.5rem;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  :first-child {
    background-image: ${linearGardient.a};
  }
  :nth-child(2) {
    background-image: ${linearGardient.b};
  }
  :nth-child(3) {
    background-image: ${linearGardient.c};
  }
  :nth-child(4) {
    background-image: ${linearGardient.d};
  }
  :nth-child(5) {
    background-image: ${linearGardient.e};
  }
  :last-child {
    background-image: ${linearGardient.f};
  }

  :hover {
    border: 0.125rem solid white;
    background: transparent;
  }

  :hover * {
    color: white;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    font-size: 1.5rem;
    margin-left: 1.2rem;
    color: ${colors.body};
  }
`

export const Name = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
`

export const Languages = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Language = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`
