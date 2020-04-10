import React from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import styled from 'styled-components'
import ApplicationComponent from './ApplicationComponent'

const { Footer, Content } = Layout

const App = () => {
  return (
    <>
      <FullHeightLayout>
        <PaddedContent>
          <Divider orientation='left'>Card example</Divider>
          <Row gutter={[10, 10]}>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent color='#5AA2E8'/>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent color='#6389FF'/>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent color='#63FFCE'/>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent color='coral'/>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent color='red'/>
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
            <Col xs={24} sm={12} md={6} lg={4}>
              <ApplicationComponent />
            </Col>
          </Row>
        </PaddedContent>
        <Footer>wip</Footer>
      </FullHeightLayout>
    </>
  )
}

export default App

const FullHeightLayout = styled(Layout)`
  height: 100%;
`

const PaddedContent = styled(Content)`
  padding: 24px 50px;
`