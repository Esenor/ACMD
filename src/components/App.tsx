import React, { useState } from 'react'
import { Layout, Row, Col, Divider, Button } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'
import ApplicationComponent from './ApplicationComponent'
import { ApplicationComponentInterface, usageEnum } from '../@types/ApplicationComponent'
import { shuffleApplicationComponentsData } from '../data'

const getApplicationComponentsNode = (applicationComponentsDataList: ApplicationComponentInterface[]) => applicationComponentsDataList.map((a, i) => (
  <Col xs={24} sm={12} md={6} key={i}>
    <ApplicationComponent
      usage={a.usage}
      name={a.name}
      parentApplication={a.parentApplication}
      summary={a.summary}
      description={a.description}
      technologies={a.technologies}
      locations={a.locations}
      informations={a.informations}
      uris={a.uris}
    />
  </Col>
))

interface UsageGroupInterface {
  usage: usageEnum
  applicationComponents: ApplicationComponentInterface[]
}

const groupApplicationComponentsByUsage = (applicationComponentsDataList: ApplicationComponentInterface[]) => applicationComponentsDataList.reduce((reduced: UsageGroupInterface[], applicationComponentData: ApplicationComponentInterface, i: number) => {
  const usageGroupIndex: number = reduced.findIndex((usageGroup: UsageGroupInterface) => usageGroup.usage === applicationComponentData.usage)
  if (usageGroupIndex >= 0) {
    reduced[usageGroupIndex].applicationComponents.push(applicationComponentData)
  } else {
    const usageGroup: UsageGroupInterface = {
      usage: applicationComponentData.usage,
      applicationComponents: [applicationComponentData]
    }
    reduced.push(usageGroup)
  }
  return reduced
}, [])

interface ParentApplicationGroupInterface {
  parentApplication: string
  applicationComponents: ApplicationComponentInterface[]
}

const groupApplicationComponentsByParentApplication = (applicationComponentsDataList: ApplicationComponentInterface[]) => applicationComponentsDataList.reduce((reduced: ParentApplicationGroupInterface[], applicationComponentData: ApplicationComponentInterface, i: number) => {
  const parentApplicationIndex: number = reduced.findIndex((parentApplicationGroup: ParentApplicationGroupInterface) => parentApplicationGroup.parentApplication === applicationComponentData.parentApplication)
  if (parentApplicationIndex >= 0) {
    reduced[parentApplicationIndex].applicationComponents.push(applicationComponentData)
  } else {
    const parentApplicationGroup: ParentApplicationGroupInterface = {
      parentApplication: applicationComponentData.parentApplication,
      applicationComponents: [applicationComponentData]
    }
    reduced.push(parentApplicationGroup)
  }
  return reduced
}, [])

enum displayModeEnum {
  usage,
  parentApplication
}

const App = () => {
  const [displayMode, updateDisplayMode] = useState(displayModeEnum.usage)
  const [applicationComponentsData, updateApplicationComponentsData] = useState(shuffleApplicationComponentsData())

  const displayApplicationComponents = (mode: displayModeEnum) => {
    switch (mode) {
      case displayModeEnum.parentApplication:
        return groupApplicationComponentsByParentApplication(applicationComponentsData).map((ApplicationComponentsParentApplicationGroup: ParentApplicationGroupInterface, i: number) => (
          <PaddedContent key={i}>
            <StyledDivider orientation='left'>{ApplicationComponentsParentApplicationGroup.parentApplication}</StyledDivider>
            <Row gutter={[8, 8]} align='middle'>
              {getApplicationComponentsNode(ApplicationComponentsParentApplicationGroup.applicationComponents)}
            </Row>
          </PaddedContent>
        ))
      case displayModeEnum.usage:
      default:
        return groupApplicationComponentsByUsage(applicationComponentsData).map((ApplicationComponentsUsageGroup: UsageGroupInterface, i: number) => (
          <PaddedContent key={i}>
            <StyledDivider orientation='left'>{ApplicationComponentsUsageGroup.usage}</StyledDivider>
            <Row gutter={[8, 8]} align='middle'>
              {getApplicationComponentsNode(ApplicationComponentsUsageGroup.applicationComponents)}
            </Row>
          </PaddedContent>
        ))
    }
  }
  return (
    <>
      <GlobalStyle/>
      <AppLayout >
        <div style={{ padding: '10px' }}>
          <Button type='danger' onClick={() => { updateApplicationComponentsData(shuffleApplicationComponentsData()) }} style={{ marginRight: '10px' }}>Shuffle application components</Button>
          <Button type={(displayMode === displayModeEnum.usage) ? 'primary' : 'default'} onClick={() => { updateDisplayMode(displayModeEnum.usage) }} style={{ marginRight: '10px' }}>Display by usage</Button>
          <Button type={(displayMode === displayModeEnum.parentApplication) ? 'primary' : 'default'} onClick={() => { updateDisplayMode(displayModeEnum.parentApplication) }}>Display by parent application</Button>
        </div>
      </AppLayout>
      <AppLayout>{displayApplicationComponents(displayMode)}</AppLayout>
    </>
  )
}

export default App

const AppLayout = styled(Layout)`
  margin: 40px;
  padding: 0px;
  background: #FFFFFF;
  border-radius: 5px;
`

const PaddedContent = styled.div`
  padding: 24px 50px;
`

const StyledDivider = styled(Divider)`
  .ant-divider-inner-text {
    color: #6E6D7A;
    text-transform: uppercase;
  }
`

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #6B79FF;
  }
`
