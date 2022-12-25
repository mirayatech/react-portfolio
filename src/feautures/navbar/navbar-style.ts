import styled from 'styled-components'
import { colors } from '../../library'

export const Nav = styled.nav`
  width: 100%;
  z-index: 10;
  position: fixed;
  padding: 1rem 1.4em;
  backdrop-filter: blur(0.8rem);
  -webkit-backdrop-filter: blur(0.8rem);
`

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 75rem; //1200px
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.div``

export const Link = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  margin-right: 1.5rem;
  text-transform: uppercase;
  color: ${colors.offWhite};
`
