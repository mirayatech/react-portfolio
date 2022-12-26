import styled from 'styled-components'

export const Primary = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  padding: 15px 15px 0 15px;

  @media screen and (max-width: 1230px) {
    padding: 15px 15px 0 0;
  }
`

export const Secondary = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 15px 150px 15px;
`

export const Tertiary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 15px 150px 15px;
`

export const ContactWrapper = styled.div`
  padding-top: 100px;
`
