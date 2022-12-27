import styled from 'styled-components'
import { colors, linearGardient } from '../../library'

export const Text = styled.p`
  line-height: 2;
  font-size: 1.1rem;
  color: ${colors.lightGrey};

  @media screen and (max-width: 745px) {
    font-size: 1rem;
  }
`

export const Link = styled.a`
  font-weight: 600;
  font-size: 1rem;
  margin: 0 1px 0 3px;
  position: relative;
  display: inline-block;
  color: ${colors.lightGrey};
  transition: all 0.3s ease;

  :after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.blue};
    position: absolute;
    bottom: 15%;
    z-index: -1;
    transition: all 0.3s ease;
    border-radius: 1px;
  }

  :hover {
    transition: all 0.3s ease;
    color: #f2f2f2;
  }

  :hover::after {
    height: 20px;
  }
`
