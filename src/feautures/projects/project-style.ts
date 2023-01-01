import styled from 'styled-components'
import { colors, linearGardient } from '../../library'

export const Grid = styled.div`
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

export const Card = styled.a`
  height: 20rem;
  width: 20rem;
  display: flex;
  color: ${colors.body};
  padding: 1.5rem;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1120px) {
    height: 19rem;
    width: 19rem;
  }

  @media screen and (max-width: 1000px) {
    height: 18rem;
    width: 44vw;
  }

  @media screen and (max-width: 760px) {
    width: 42vw;
  }

  @media screen and (max-width: 600px) {
    height: 14rem;
    width: 92vw;
  }

  @media screen and (max-width: 420px) {
    width: 90vw;
  }

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
    padding: 0 5px 5px;
    font-size: 1.5rem;
    margin-left: 1.2rem;
    color: ${colors.body};
    @media screen and (max-width: 745px) {
      font-size: 1.3rem;
      margin-left: 1.6rem;
    }
  }
`

export const Name = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 745px) {
    font-size: 1.5rem;
  }
`

export const Languages = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Language = styled.span`
  font-weight: 500;
  font-size: 0.9rem;

  @media screen and (max-width: 745px) {
    font-size: 0.8rem;
  }
`
