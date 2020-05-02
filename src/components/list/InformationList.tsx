import React from 'react'
import { List, Empty } from 'antd'
import Information from '../Information'
import { InformationInterface } from '../../@types/ApplicationComponent'

export interface InformationListPropsInterface {
  dataSource: InformationInterface[]
}

const InformationList = ({ dataSource }: InformationListPropsInterface) => (dataSource.length > 0) ?
<List>{dataSource.map((i: InformationInterface, c: number) => <Information information={i} key={c}/>) }</List>
: <Empty/>

export default InformationList
