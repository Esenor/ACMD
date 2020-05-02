import React from 'react'
import styled from 'styled-components'
import * as IconFa from 'react-icons/fa'
import * as IconGo from 'react-icons/go'

interface IconContainerPropsInterface {
  children: React.ReactNode
  color?: string
  size?: string
  className?: string
}
const IconContainer = ({ children, className }: IconContainerPropsInterface) => <span className={className}>
  {children}
</span>

const StyledIconContainer = styled(IconContainer)`
  svg {
    vertical-align: sub;
    margin-right: 5px;
    color: ${props => props.color};
    height: ${props => props.size};
    width: ${props => props.size};
  }
`

const defaultSize: string = '20px'

//

export interface IconPropsInterface {
  size?: string
  color?: string
}

export const DockerIcon = ({ size, color }: IconPropsInterface) => <>
  <StyledIconContainer color={color ?? '#0073EC'} size={size ?? defaultSize}>
    <IconFa.FaDocker/>
  </StyledIconContainer>
</>

export const PackageIcon = ({ size, color }: IconPropsInterface) => <>
  <StyledIconContainer color={color ?? '#grey'} size={size ?? defaultSize}>
    <IconGo.GoPackage />
  </StyledIconContainer>
</>

export const GithubIcon = ({ size, color }: IconPropsInterface) => <>
  <StyledIconContainer color={color ?? 'grey'} size={size ?? defaultSize}>
    <IconFa.FaGithub/>
  </StyledIconContainer>
</>

export const JenkinsIcon = ({ size, color }: IconPropsInterface) => <>
  <StyledIconContainer color={color ?? 'red'} size={size ?? defaultSize}>
    <IconFa.FaJenkins/>
  </StyledIconContainer>
</>

export const LinkIcon = ({ size, color }: IconPropsInterface) => <>
  <StyledIconContainer color={color ?? 'grey'} size={size ?? defaultSize}>
    <IconFa.FaLink/>
  </StyledIconContainer>
</>
