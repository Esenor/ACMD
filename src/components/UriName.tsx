import React from 'react'
import styled from 'styled-components'
import { FaDocker, FaGithub, FaJenkins, FaLink } from 'react-icons/fa'
import { iconEnum, UriInterface } from '../@types/ApplicationComponent'

export interface UriNamePropsInterface {
  uri: UriInterface
}

const UriName = ({ uri }: UriNamePropsInterface) => {
  const getIcon = (iconName: iconEnum) => {
    switch (iconName) {
      case iconEnum.docker:
        return <IconContainer color='#0073EC'><FaDocker size='20px'/></IconContainer>
      case iconEnum.github:
        return <IconContainer color='grey'><FaGithub size='20px'/></IconContainer>
      case iconEnum.jenkins:
        return <IconContainer color='red'><FaJenkins size='20px'/></IconContainer>
      default:
        return <IconContainer color='grey'><FaLink size='20px'/></IconContainer>
    }
  }
  return <>{getIcon(uri.icon)}<strong>{uri.name}</strong></>
}

const IconContainer = styled.span`
  svg {
    vertical-align: sub;
    margin-right: 5px;
    color: ${props => props.color};
  }
`

export default UriName
