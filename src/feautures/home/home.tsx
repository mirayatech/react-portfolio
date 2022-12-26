/* eslint-disable react/react-in-jsx-scope */
import {
  Arrow,
  Bundle,
  Chunck,
  DistanceLeftChunck,
  FourLinePreventionV1,
  FourLinePreventionV2,
  FourLinePreventionV3,
  FourLinePreventionV4,
  FourLinePrimaryV1,
  FourLinePrimaryV2,
  FourLinePrimaryV3,
  FourLinePrimaryV4,
  FourLineSecondaryV1,
  FourLineSecondaryV2,
  FourLineSecondaryV3,
  FourLineSecondaryV4,
  FourLineTertiaryV1,
  FourLineTertiaryV2,
  FourLineTertiaryV3,
  FourLineTertiaryV4,
  Name,
  OneLine,
  Subtitle,
  ThreeLinePrimaryV1,
  ThreeLinePrimaryV2,
  ThreeLineSecondaryV1,
  ThreeLineSecondaryV2,
  ThreeLineTertiaryV1,
  ThreeLineTertiaryV2,
  Title,
  TwoLinePrimaryV1,
  TwoLinePrimaryV2,
  TwoLineSecondaryV1,
  TwoLineSecondaryV2,
  Wrapper,
} from './home-style'
export function Home() {
  return (
    <Wrapper>
      <Arrow />

      <Bundle>
        <Chunck>
          <ThreeLinePrimaryV1 />
          <ThreeLineSecondaryV1 />
          <ThreeLineTertiaryV1 />
        </Chunck>

        <OneLine />

        <Chunck>
          <FourLinePrimaryV1 />
          <FourLineSecondaryV1 />
          <FourLineTertiaryV1 />
          <FourLinePreventionV1 />
        </Chunck>

        <Chunck>
          <FourLinePrimaryV2 />
          <FourLineSecondaryV2 />
          <FourLineTertiaryV2 />
          <FourLinePreventionV2 />
        </Chunck>

        <br />

        <DistanceLeftChunck>
          <FourLinePrimaryV3 />
          <FourLineSecondaryV3 />
          <FourLineTertiaryV3 />
          <FourLinePreventionV3 />
        </DistanceLeftChunck>

        <Name>
          <Title>Miraya Tech</Title>
          <Subtitle>Frontend Developer</Subtitle>
        </Name>

        <Chunck>
          <TwoLinePrimaryV1 />
          <TwoLineSecondaryV1 />
        </Chunck>

        <Chunck>
          <ThreeLinePrimaryV2 />
          <ThreeLineSecondaryV2 />
          <ThreeLineTertiaryV2 />
        </Chunck>

        <br />

        <Chunck>
          <TwoLinePrimaryV2 />
          <TwoLineSecondaryV2 />
        </Chunck>

        <OneLine />

        <Chunck>
          <FourLinePrimaryV4 />
          <FourLineSecondaryV4 />
          <FourLineTertiaryV4 />
          <FourLinePreventionV4 />
        </Chunck>
      </Bundle>
    </Wrapper>
  )
}
