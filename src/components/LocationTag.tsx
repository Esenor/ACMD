import React from 'react'
import StyledTag from '../styles/StyledTag'
import { ClusterOutlined } from '@ant-design/icons'

export enum TypeEnum {
  prod = 'prod',
  preprod = 'preprod',
  qa = 'qa'
}

export interface LocationTagProps {
  name: string
  locationType: TypeEnum
}

const LocationTag = ({ name, locationType }: LocationTagProps) => {
  let color: string = ''
  switch (locationType) {
    case TypeEnum.prod :
      color = 'red'
      break
    case TypeEnum.preprod :
      color = 'orange'
      break
    case TypeEnum.qa :
      color = ''
      break
  }
  return (
    <StyledTag icon={<ClusterOutlined/>} color={color}>{name}</StyledTag>
  )
}

export default LocationTag
