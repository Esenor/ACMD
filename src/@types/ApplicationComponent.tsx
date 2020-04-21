export enum environmentEnum {
  prod = 'prod',
  preprod = 'preprod',
  qa = 'qa'
}

export enum usageEnum {
  asset = 'asset',
  webApplication = 'webApplication',
  service = 'service',
  backend = 'backend'
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
  summary?: string
  description?: string
  technologies: TechnologyInterface[]
  locations: LocationInterface[]
  informations: InformationInterface[]
}
