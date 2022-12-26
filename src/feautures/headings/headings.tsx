import { Line } from '../../library'
import { HeadingsWrapper, HeadingThree, HeadingTwo } from './headings-style'

/* eslint-disable react/react-in-jsx-scope */

type HeadingsProps = {
  title: string
  subtitle: string
}

export function Headings({ title, subtitle }: HeadingsProps) {
  return (
    <HeadingsWrapper>
      <HeadingTwo>
        {title}
        <Line />
      </HeadingTwo>

      <HeadingThree> {subtitle} </HeadingThree>
    </HeadingsWrapper>
  )
}
