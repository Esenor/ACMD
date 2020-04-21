import React from 'react'
import StyledTag from '../styles/StyledTag'
import { ClusterOutlined } from '@ant-design/icons'
import { environmentEnum } from '../@types/ApplicationComponent'

export interface LocationTagProps {
  name: string
  locationType: environmentEnum
}

const LocationTag = ({ name, locationType }: LocationTagProps) => {
  let color: string = ''
  switch (locationType) {
    case environmentEnum.prod :
      color = 'red'
      break
    case environmentEnum.preprod :
      color = 'orange'
      break
    case environmentEnum.qa :
      color = ''
      break
  }
  return (
    <StyledTag icon={<ClusterOutlined/>} color={color}>{name}</StyledTag>
  )
}

export default LocationTag
