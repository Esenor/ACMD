import React from 'react'
import styled from 'styled-components'
import { Badge } from 'antd'
import { informationScopeEnum, InformationInterface } from '../@types/ApplicationComponent'

export interface InformationBadgePropsInterface {
  informations: InformationInterface[]
}

interface FormatedInformationsBageDataInterface {
  color: string,
  informations: InformationInterface[]
}

interface FormatedInformationsBagesDataInterface {
  info: FormatedInformationsBageDataInterface
  success: FormatedInformationsBageDataInterface
  warning: FormatedInformationsBageDataInterface
  error: FormatedInformationsBageDataInterface
}

const InformationBadges = ({ informations }: InformationBadgePropsInterface) => {
  const badgesInformations = informations.reduce((reduced: FormatedInformationsBagesDataInterface, information: InformationInterface) => {
    switch (information.scope) {
      case informationScopeEnum.error:
        reduced.error.informations.push(information)
        break
      case informationScopeEnum.warning:
        reduced.warning.informations.push(information)
        break
      case informationScopeEnum.success:
        reduced.success.informations.push(information)
        break
      case informationScopeEnum.info:
      default:
        reduced.info.informations.push(information)
        break
    }
    return reduced
  }, {
    info: {
      color: 'grey',
      informations: []
    },
    success: {
      color: '#52C41A',
      informations: []
    },
    warning: {
      color: '#FA8C16',
      informations: []
    },
    error: {
      color: '#F5222D',
      informations: []
    }
  })
  return (
    <StyledBadges>
      {
        badgesInformations.error.informations.length > 0 ? (
          <Badge count={badgesInformations.error.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.error.color }}/>
        ) : null
      }
      {
        badgesInformations.warning.informations.length > 0 ? (
          <Badge count={badgesInformations.warning.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.warning.color }}/>
        ) : null
      }
      {
        badgesInformations.success.informations.length > 0 ? (
          <Badge count={badgesInformations.success.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.success.color }}/>
        ) : null
      }
      {
        badgesInformations.info.informations.length > 0 ? (
          <Badge count={badgesInformations.info.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.info.color }}/>
        ) : null
      }
    </StyledBadges>
  )
}

const StyledBadges = styled.div`
  position: relative;
  top: -8px;
`

export default InformationBadges
