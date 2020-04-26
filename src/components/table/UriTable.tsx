import React from 'react'
import { Table } from 'antd'
import UriName from '../UriName'
import { UriInterface } from '../../@types/ApplicationComponent'

export interface UriTablePropsInterface {
  dataSource: UriInterface[]
}

const UriTable = ({ dataSource }: UriTablePropsInterface) => (
  <Table columns={[
    { title: 'Name', dataIndex: 'name', key: 'name', width: '20%' },
    { title: 'Uri', dataIndex: 'uri', key: 'uri' }
  ]}
  dataSource={dataSource.map((uri: UriInterface, i: number) => ({ key: i, name: (<UriName uri={uri} />), uri: uri.link }))}/>
)

export default UriTable
