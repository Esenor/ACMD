import React from 'react'
import styled from 'styled-components'
import { Empty } from 'antd'

export enum tagContainerSizeEnum {
  default = 'default',
  small = 'small'
}

export interface TagContainerProps {
  children: React.ReactNodeArray
  size?: tagContainerSizeEnum
}

const TagContainer = ({ children, size = tagContainerSizeEnum.default }: TagContainerProps) => (children.length > 0) ?
  <StyledTagContainer>{children}</StyledTagContainer> :
  (size === tagContainerSizeEnum.small) ? <Empty/> : null

const StyledTagContainer = styled.div`
  padding: 5px 0px;
`

export default TagContainer
