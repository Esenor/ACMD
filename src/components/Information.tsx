import React from 'react'
import { List, Avatar } from 'antd'
import { InfoCircleFilled, WarningFilled, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { InformationInterface, informationScopeEnum } from '../@types/ApplicationComponent'

export interface InformationPropsInterface {
  information: InformationInterface
}

const Information = ({ information }: InformationPropsInterface) => {
  const getRelatedIcon = (scope: informationScopeEnum): React.ReactNode => {
    switch (scope) {
      case informationScopeEnum.error:
        return <Avatar style={{background: '#F5222D'}}icon={<ExclamationCircleFilled />}/>
      case informationScopeEnum.warning:
        return <Avatar style={{background: '#FA8C16'}}icon={<WarningFilled />}/>
      case informationScopeEnum.success:
        return <Avatar style={{background: '#52C41A'}}icon={<CheckCircleFilled />}/>
      case informationScopeEnum.info:
      default:
        return <Avatar style={{background: 'grey'}}icon={<InfoCircleFilled />}/>
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

export default Information
