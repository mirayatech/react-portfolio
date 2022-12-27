import styled from 'styled-components'
import { colors, flexCenter } from '../../library'
const H1 = `
font-weight: 900;
    letter-spacing: 2px;
    font-size: 0.95rem;
    color: ${colors.white};
    text-transform: uppercase;
    margin-bottom: 1rem;
    background: var(--b-gardient);
    background-clip: text;
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @media screen and (max-width: 745px) {
      font-size: .8rem;
    }
    `

const H2 = `
font-weight: 900;
    letter-spacing: 2px;
    font-size: 0.95rem;
    color: ${colors.white};
    text-transform: uppercase;
    margin-bottom: 1rem;
    background: var(--b-gardient);
    background-clip: text;
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
      @media screen and (max-width: 745px) {
      font-size: .8rem;
    }
    `

export const Nav = styled.nav`
  display: flex;
  padding: 2rem;
  position: relative;
  justify-content: flex-end;

  button {
    position: fixed;
    z-index: 20;
    ${flexCenter}
    width: 3rem;
    height: 3rem;
    border: none;
    font-size: 3rem;
    border-radius: 50%;
    color: ${colors.white};
    background: transparent;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    transition: all 0.2s ease;

    :hover {
      transform: scale(1.1);
    }

    svg {
      height: 3rem;
    }
  }
`

export const Menu = styled.nav`
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  position: fixed;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  background-color: ${colors.transparentBlack};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media screen {
    flex-direction: column;
  }

  * {
    z-index: 20;
  }
`

export const Navigation = styled.div`
  h1 {
    ${H1}
  }
`

export const Wrapper = styled.div`
  display: flex;
  line-height: 2.5;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.white};
  flex-direction: column;

  @media screen and (max-width: 745px) {
    font-size: 1rem;
  }
  span {
    cursor: pointer;
    transition: all 0.2s ease;
  }
  span:hover {
    transform: scale(1.1);
  }
`

export const Links = styled.div`
  h1 {
    ${H2}
  }
`

export const Grid = styled.div`
  display: grid;
  line-height: 2.5;
  grid-template-columns: auto auto;

  a {
    color: ${colors.white};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;

    @media screen and (max-width: 745px) {
      font-size: 1.4rem;
    }
  }
  a:hover {
    transform: scale(1.1);
  }
`
