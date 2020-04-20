import React from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'
import ApplicationComponent, { UsageEnum, ApplicationComponentProps } from './ApplicationComponent'
import { applicationComponentsData } from '../data'

const getApplicationComponentsByUsage = (applicationComponentsDataList: ApplicationComponentProps[], usage: UsageEnum) => applicationComponentsDataList.filter((applicationComponentData: ApplicationComponentProps) => applicationComponentData.usage === usage).map((a, i) => (
    <Col xs={24} sm={12} md={6} key={i}>
      <ApplicationComponent
        usage={a.usage}
        name={a.name}
        color={a.color}
        description={a.description}
        technologies={a.technologies}
        locations={a.locations}
      />
    </Col>
))

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <AppLayout>
        <PaddedContent>
          <StyledDivider orientation='left'>WebApp</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, UsageEnum.WebApp)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Websites</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, UsageEnum.Website)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Services</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, UsageEnum.Service)}
          </Row>
        </PaddedContent>
        <PaddedContent>
          <StyledDivider orientation='left'>Backend</StyledDivider>
          <Row gutter={[8, 8]}>
            {getApplicationComponentsByUsage(applicationComponentsData, UsageEnum.Backend)}
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
