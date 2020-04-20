import React from 'react'
import styled from 'styled-components'
import { notification, Badge } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
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

const displayNotification = (informations: InformationInterface[]) => {
  informations.forEach(information => {
    const notificationParams = {
      message: information.title,
      description: (
        <>
          <div>{ information.message }</div>
          <div><LinkOutlined/> { information.link }</div>
        </>
      ),
      icon: null,
      duration: 0
    }
    switch (information.scope) {
      case informationScopeEnum.info:
        notification.info(notificationParams)
        break
      case informationScopeEnum.error:
        notification.error(notificationParams)
        break
      case informationScopeEnum.warning:
        notification.warning(notificationParams)
        break
      case informationScopeEnum.success:
      default:
        notification.success(notificationParams)
        break
    }
  })
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
          <span onClick={e => displayNotification(badgesInformations.error.informations)}>
            <Badge count={badgesInformations.error.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.error.color }}/>
          </span>
        ) : null
      }
      {
        badgesInformations.warning.informations.length > 0 ? (
          <span onClick={e => displayNotification(badgesInformations.warning.informations)}>
            <Badge count={badgesInformations.warning.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.warning.color }}/>
          </span>
        ) : null
      }
      {
        badgesInformations.success.informations.length > 0 ? (
          <span onClick={e => displayNotification(badgesInformations.success.informations)}>
            <Badge count={badgesInformations.success.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.success.color }}/>
          </span>
        ) : null
      }
      {
        badgesInformations.info.informations.length > 0 ? (
          <span onClick={e => displayNotification(badgesInformations.info.informations)}>
            <Badge count={badgesInformations.info.informations.length} style={{ margin: 'auto 2px', backgroundColor: badgesInformations.info.color }}/>
          </span>
        ) : null
      }
    </StyledBadges>
  )
}

const StyledBadges = styled.div`
  position: relative;
  top: 10px;
  z-index: 999;
  left: 15px;
  &>span{
    cursor: pointer;
  }
`

export default InformationBadges
