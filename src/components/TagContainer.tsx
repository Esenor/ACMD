import React from 'react'
import styled from 'styled-components'

export interface TagContainerProps {
  children: React.ReactNodeArray
}

const TagContainer = ({ children }: TagContainerProps) => <StyledTagContainer>{children}</StyledTagContainer>

const StyledTagContainer = styled.div`
  padding: 5px 0px;
`

export default TagContainer
