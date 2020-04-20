import React from 'react'
import styled from 'styled-components'
import { Card, Badge, notification } from 'antd'
import Title from './Title'
import TagContainer from './TagContainer'
import TechnologyTag, { TechnologyTagProps } from './TechnologyTag'
import LocationTag, { LocationTagProps } from './LocationTag'

export { TypeEnum as LocationTypeEnum } from './LocationTag'
export enum UsageEnum {
  WebApp = 'web-app',
  Website = 'website',
  Service = 'service',
  Backend = 'backend'
}
export interface ApplicationComponentProps {
  usage: UsageEnum
  color?: string
  name: string
  description?: string
  technologies: TechnologyTagProps[]
  locations: LocationTagProps[]
}

interface StyledCardProps {
  topColor?: string
}

const ApplicationComponent = ({ color, name, description, technologies, locations }: ApplicationComponentProps) => {
  const technologiesTags = technologies.map((t: TechnologyTagProps, i) => (
    <TechnologyTag name={t.name} color={t.color} key={i}/>
  ))
  const locationsTags = locations.map((l: LocationTagProps, i) => (
    <LocationTag locationType={l.locationType} name={l.name} key={i}/>
  ))
  return (
    <>
      <StyledCard>
        <Badges/>
        <Card>
          <Title title={name} subtitle={description} />
          <TagContainer>{technologiesTags}</TagContainer>
          <TagContainer>{locationsTags}</TagContainer>
        </Card>
      </StyledCard>
    </>
  )
}

const errorNotification = (message: string, description: string, c: number = 1) => {
  [...new Array(c)].forEach(i => {
    notification.error({
      message,
      description,
      icon: null,
      duration: 0
    })
  })
}

const warningNotification = (message: string, description: string, c: number = 1) => {
  [...new Array(c)].forEach(i => {
    notification.warning({
      message,
      description,
      icon: null,
      duration: 0
    })
  })
}

const successNotification = (message: string, description: string, c: number = 1) => {
  [...new Array(c)].forEach(i => {
    notification.success({
      message,
      description,
      icon: null,
      duration: 0
    })
  })
}
const Badges = () => (
  <StyledBadges>
    <span onClick={e => errorNotification('Error message', 'lorem ipsum en dolo del assarim, tidi', 1)}>
      <Badge count={1} style={{ margin: 'auto 2px', backgroundColor: '#F5222D' }}/>
    </span>
    <span onClick={e => warningNotification('Warning message', 'lorem ipsum en dolo del assarim, tidi', 2)}>
      <Badge count={2} style={{ margin: 'auto 2px', backgroundColor: '#FA8C16' }}/>
    </span>
    <span onClick={e => successNotification('Success message', 'lorem ipsum en dolo del assarim, tidi', 3)}>
      <Badge count={3} style={{ margin: 'auto 2px', backgroundColor: '#52C41A' }}/>
    </span>
  </StyledBadges>
)

const StyledBadges = styled.div`
  position: relative;
  top: 10px;
  z-index: 999;
  left: 15px;
  &>span{
    cursor: pointer;
  }
`

const StyledCard = styled.div`
  .ant-card {
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
