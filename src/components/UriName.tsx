import React from 'react'
import styled from 'styled-components'
import { FaDocker, FaGithub, FaJenkins, FaLink } from 'react-icons/fa'
import { iconEnum, UriInterface } from '../@types/ApplicationComponent'

export interface UriNamePropsInterface {
  uri: UriInterface
}

const iconSize: string = '20px'

const UriName = ({ uri }: UriNamePropsInterface) => {
  const getIcon = (iconName: iconEnum) => {
    switch (iconName) {
      case iconEnum.docker:
        return <IconContainer color='#0073EC'><FaDocker size={iconSize}/></IconContainer>
      case iconEnum.github:
        return <IconContainer color='grey'><FaGithub size={iconSize}/></IconContainer>
      case iconEnum.jenkins:
        return <IconContainer color='red'><FaJenkins size={iconSize}/></IconContainer>
      default:
        return <IconContainer color='grey'><FaLink size={iconSize}/></IconContainer>
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
