import styled from 'styled-components'
import { colors, linearGardient } from '../../library'

export const Wrapper = styled.div`
  display: flex;
`

export const Arrow = styled.div`
  width: 1px;
  height: 492px;
  margin-right: 60px;
  background: #333333;
`

export const Bundle = styled.div`
  width: 100%;
`
export const Chunck = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  :last-child {
    margin-bottom: 0;
  }
`
export const DistanceLeftChunck = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 60px;
`

// NAME
export const Name = styled.div`
  line-height: 1.8;
  margin-left: 60px;
  padding: 20px 0 35px 0;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  color: ${colors.white};
`

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: ${colors.white};
`

// FOUR ROWS --------------------------------------------------------

// Four Rows V1
export const FourLinePrimaryV1 = styled.div`
  width: 80px;
  height: 15px;
  margin-right: 15px;
  background: ${linearGardient.d};
`
export const FourLineSecondaryV1 = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLineTertiaryV1 = styled.div`
  height: 15px;
  width: 60px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLinePreventionV1 = styled.div`
  height: 15px;
  width: 140px;
  background: ${linearGardient.d};
`

// Four Rows V2
export const FourLinePrimaryV2 = styled.div`
  width: 140px;
  height: 15px;
  margin-right: 15px;
  background: ${linearGardient.g};
`
export const FourLineSecondaryV2 = styled.div`
  height: 15px;
  width: 80px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLineTertiaryV2 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLinePreventionV2 = styled.div`
  height: 15px;
  width: 220px;
  background: ${linearGardient.b};
`

// Four Rows V3
export const FourLinePrimaryV3 = styled.div`
  width: 80px;
  height: 15px;
  margin-right: 15px;
  background: ${linearGardient.b};
`
export const FourLineSecondaryV3 = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLineTertiaryV3 = styled.div`
  height: 15px;
  width: 60px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLinePreventionV3 = styled.div`
  height: 15px;
  width: 140px;
  background: ${linearGardient.d};
`

// Four Rows V4
export const FourLinePrimaryV4 = styled.div`
  width: 60px;
  height: 15px;
  margin-right: 15px;
  background: ${linearGardient.b};
`
export const FourLineSecondaryV4 = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLineTertiaryV4 = styled.div`
  height: 15px;
  width: 60px;
  margin-right: 15px;
  background: ${colors.darkGrey};
`
export const FourLinePreventionV4 = styled.div`
  height: 15px;
  width: 80px;
  background: ${linearGardient.d};
`

// THREE ROWS --------------------------------------------------------

// Three Rows V1
export const ThreeLinePrimaryV1 = styled.div`
  height: 15px;
  width: 140px;
  background: ${linearGardient.d};
`

export const ThreeLineSecondaryV1 = styled.div`
  width: 80px;
  height: 15px;
  margin: 0 15px;
  background: ${colors.darkGrey};
`

export const ThreeLineTertiaryV1 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${colors.darkGrey};
`

// Three Rows V2
export const ThreeLinePrimaryV2 = styled.div`
  height: 15px;
  width: 140px;
  background: ${linearGardient.d};
`

export const ThreeLineSecondaryV2 = styled.div`
  width: 60px;
  height: 15px;
  margin: 0 15px;
  background: ${linearGardient.g};
`

export const ThreeLineTertiaryV2 = styled.div`
  width: 222px;
  height: 15px;
  background: ${linearGardient.d};
`

// TWO ROWS --------------------------------------------------------

// Two Rows V1
export const TwoLinePrimaryV1 = styled.div`
  height: 15px;
  width: 170px;
  margin-right: 15px;
  background: ${linearGardient.d};
`

export const TwoLineSecondaryV1 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${colors.darkGrey};
`
// Two Rows V2
export const TwoLinePrimaryV2 = styled.div`
  height: 15px;
  width: 120px;
  background: ${linearGardient.d};
`

export const TwoLineSecondaryV2 = styled.div`
  width: 60px;
  height: 15px;
  margin: 0 15px;
  background: ${colors.darkGrey};
`

// ONE ROW --------------------------------------------------------

export const OneLine = styled.div`
  height: 15px;
  width: 220px;
  margin-bottom: 12px;
  background: ${linearGardient.g};
`
