import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import Title from './Title'
import TagContainer from './TagContainer'
import TechnologyTag from './TechnologyTag'
import LocationTag from './LocationTag'
import InformationBadges from './InformationBadges'
import { usageEnum, LocationInterface, TechnologyInterface, InformationInterface } from '../@types/ApplicationComponent'

export interface ApplicationComponentProps {
  usage: usageEnum
  color?: string
  name: string
  description?: string
  technologies: TechnologyInterface[]
  locations: LocationInterface[]
  informations: InformationInterface[]
}

interface StyledCardProps {
  topColor?: string
}

const ApplicationComponent = ({ informations, name, description, technologies, locations }: ApplicationComponentProps) => {
  const technologiesTags = technologies.map((t: TechnologyInterface, i) => (
    <TechnologyTag name={t.name} color={t.color} key={i}/>
  ))
  const locationsTags = locations.map((l: LocationInterface, i) => (
    <LocationTag locationType={l.environment} name={l.name} key={i}/>
  ))
  return (
    <>
      <StyledCard>
        <Card>
          <InformationBadges informations={informations} />
          <Title title={name} subtitle={description} />
          <TagContainer>{technologiesTags}</TagContainer>
          <TagContainer>{locationsTags}</TagContainer>
        </Card>
      </StyledCard>
    </>
  )
}

const StyledCard = styled.div`
  .ant-card {
    min-height: 200px;
    border-radius: 5px;
    color: #6E6D7A;
    background: #F8F9FB;
    cursor: pointer;
    &:hover {
      box-shadow: 10px 10px 17px -6px rgba(194, 194, 194, 0.5);
    }
  }
`

export default ApplicationComponent
