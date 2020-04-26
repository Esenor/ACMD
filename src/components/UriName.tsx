import React from 'react'
import * as Icon from './Icons'
import { iconEnum, UriInterface } from '../@types/ApplicationComponent'

export interface UriNamePropsInterface {
  uri: UriInterface
}

const UriName = ({ uri }: UriNamePropsInterface) => {
  const getIcon = (iconName: iconEnum) => {
    switch (iconName) {
      case iconEnum.docker:
        return <Icon.DockerIcon/>
      case iconEnum.github:
        return <Icon.GithubIcon/>
      case iconEnum.jenkins:
        return <Icon.JenkinsIcon/>
      default:
        return <Icon.LinkIcon/>
    }
  }
  return <>{getIcon(uri.icon)}<strong>{uri.name}</strong></>
}

export default UriName
