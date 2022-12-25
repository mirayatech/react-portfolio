import styled from 'styled-components'
import { colorful } from '../../library'

export const Welcoming = styled.h1`
  font-weight: 500;
  font-size: 1.1rem;

  text-transform: uppercase;
`

export const Name = styled.h2`
  font-size: 3.75rem;
  font-weight: 900;
  margin: 0.5rem 0;
  background: linear-gradient(
    -45deg,
    ${colorful.colorLightBlue},
    ${colorful.colorLightPurple},
    ${colorful.colorLightBlue},
    ${colorful.colorLightPurple}
  );
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
`
export const Characteristic = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`

export const Summary = styled.p`
  max-width: 500px;
  font-size: 1.1rem;
  letter-spacing: 1px;
`
