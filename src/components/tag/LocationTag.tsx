import React from 'react'
import StyledTag from '../../styles/StyledTag'
import styled from 'styled-components'
import { TiLocation as Icon } from 'react-icons/ti'
import { environmentEnum } from '../../@types/ApplicationComponent'
import { Tooltip } from 'antd'

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
    <Tooltip title={`${locationType} environment location`}><StyledTag icon={<StyledIcon/>} color={color}>{name}</StyledTag></Tooltip>
  )
}

const StyledIcon = styled(Icon)`
  vertical-align: sub
`

export default LocationTag
