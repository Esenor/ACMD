import React from 'react'
import styled from 'styled-components'
import { DockerIcon } from './Icons'

export interface TitleProps {
  title: string
  subtitle?: string
}

const Title = ({ title, subtitle }: TitleProps) => (
  <>
    <H1Styled>
      <DockerIcon/>
      {title}
    </H1Styled>
    {subtitle ? (
      <small>{subtitle}</small>
    ) : null}
  </>
)

const H1Styled = styled.h1`
  overflow: hidden;
  word-break: break-all;
  font-size: 1.2em;
  color: #6E6D7A;
  text-transform: capitalize;
`

export default Title
