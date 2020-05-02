import React from 'react'
import styled from 'styled-components'
import { List, Avatar } from 'antd'
import { FaInfoCircle, FaExclamationCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import { InformationInterface, informationScopeEnum } from '../@types/ApplicationComponent'

export interface InformationPropsInterface {
  information: InformationInterface
}

const Information = ({ information }: InformationPropsInterface) => {
  const getRelatedIcon = (scope: informationScopeEnum): React.ReactNode => {
    switch (scope) {
      case informationScopeEnum.error:
        return <StyledAvatar icon={<FaExclamationCircle color='#F5222D'/>}/>
      case informationScopeEnum.warning:
        return <StyledAvatar icon={<FaExclamationTriangle color='#FA8C16'/>}/>
      case informationScopeEnum.success:
        return <StyledAvatar icon={<FaCheckCircle color='#52C41A'/>}/>
      case informationScopeEnum.info:
      default:
        return <StyledAvatar icon={<FaInfoCircle color='grey'/>}/>
    }
  }
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar icon={getRelatedIcon(information.scope)} />}
        title={information.title}
        description={(
          <>
            <span>{information.message}</span>
            <br/>
            <small>{information.link}</small>
          </>
        )}
      />
    </List.Item>
  )
}

const StyledAvatar = styled(Avatar)`
  background: #F8F9FB;
  padding: 1px;
`

export default Information
