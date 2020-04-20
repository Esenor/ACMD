export enum environmentEnum {
  prod = 'prod',
  preprod = 'preprod',
  qa = 'qa'
}

export enum usageEnum {
  WebApp = 'web-app',
  Website = 'website',
  Service = 'service',
  Backend = 'backend'
}

export enum informationScopeEnum {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info'
}

export interface TechnologyInterface {
  name: string
  color: string
}

export interface LocationInterface {
  name: string
  environment: environmentEnum
}

export interface InformationInterface {
  scope: informationScopeEnum
  title: string
  message?: string
  link?: string
}

export interface ApplicationComponentInterface {
  usage: usageEnum
  name: string
  description?: string
  technologies: TechnologyInterface[]
  locations: LocationInterface[]
  informations: InformationInterface[]
}
