import React from 'react'
import StyledTag from '../../styles/StyledTag'

export interface TechnologyTagProps {
  name: string
  color: string
}

const TechnologyTag = ({ name, color }: TechnologyTagProps) => <StyledTag color={color}>{name}</StyledTag>

export default TechnologyTag
