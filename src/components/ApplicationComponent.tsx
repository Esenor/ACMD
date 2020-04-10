import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { QuestionCircleOutlined, EllipsisOutlined, FormOutlined } from '@ant-design/icons'

interface ApplicationComponentProps {
  color?: string
}

interface StyledCardProps {
  topColor?: string
}

const ApplicationComponent = ({ color }: ApplicationComponentProps) => {
  return (
    <StyledCard topColor={color}>
      <Card
        actions={[
          <FormOutlined key='setting' />,
          <QuestionCircleOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />
        ]}
      >
        ...
      </Card>
    </StyledCard>
  )
}

const StyledCard = styled.div`
 ${'.ant-card-body'} {
  border-top: 5px solid ${(props: StyledCardProps) => props.topColor ? props.topColor : '#17AEBF'};
 }
`

export default ApplicationComponent
