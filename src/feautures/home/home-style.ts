import styled from 'styled-components'
import { colors } from '../../library'

export const Welcoming = styled.h1`
  color: ${colors.offWhite};
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
    ${colors.colorLightBlue},
    ${colors.colorLightPurple},
    ${colors.colorLightBlue},
    ${colors.colorLightPurple}
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
  color: ${colors.offWhite};
`

export const Summary = styled.p`
  max-width: 31.25rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: ${colors.lightGrey};
`
