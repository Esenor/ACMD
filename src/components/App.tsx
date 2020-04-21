import React from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'
import ApplicationComponent from './ApplicationComponent'
import { ApplicationComponentInterface, usageEnum } from '../@types/ApplicationComponent'
import { applicationComponentsData } from '../data'

const getApplicationComponentsByUsage = (applicationComponentsDataList: ApplicationComponentInterface[], usage: usageEnum) => applicationComponentsDataList.filter((applicationComponentData: ApplicationComponentInterface) => applicationComponentData.usage === usage).map((a, i) => (
    <Col xs={24} sm={12} md={6} key={i}>
      <ApplicationComponent
        usage={a.usage}
        name={a.name}
        summary={a.summary}
        description={a.description}
        technologies={a.technologies}
        locations={a.locations}
        informations={a.informations}
      />
    </Col>
))

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <AppLayout>
        <PaddedContent>
          <StyledDivider orientation='left'>Assets</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, usageEnum.asset)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Web applications</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, usageEnum.webApplication)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Services</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, usageEnum.service)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Backend</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, usageEnum.backend)}
          </Row>
        </PaddedContent>
      </AppLayout>
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
    background: #2E59E1;
  }
`
