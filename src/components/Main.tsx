import React from 'react'
import { Layout, Menu } from 'antd'

const { Header, Sider, Content } = Layout

const Main = () => {
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={false}>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <header>Header</header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Main
