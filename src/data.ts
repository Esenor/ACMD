import { ApplicationComponentInterface, environmentEnum, usageEnum, informationScopeEnum } from './@types/ApplicationComponent'
export const applicationComponentsData: ApplicationComponentInterface[] = [
  {
    usage: usageEnum.WebApp,
    name: 'application.component.name',
    description: 'the application component description',
    technologies: [
      {
        name: 'Docker',
        color: 'blue'
      }
    ],
    locations: [
      {
        name: 'prod.domain.com',
        environment: environmentEnum.prod
      }
    ],
    informations: [
      {
        title: '1 an info',
        message: 'Lorem ipsume en dolo',
        link: 'fii foo',
        scope: informationScopeEnum.info
      },
      {
        title: '2 an info',
        message: 'Lorem ipsume en dolo',
        link: 'fii foo',
        scope: informationScopeEnum.info
      },
      {
        title: '3 an info',
        message: 'Lorem ipsume en dolo',
        link: 'fii foo',
        scope: informationScopeEnum.error
      },
      {
        title: '4 an info',
        message: 'Lorem ipsume en dolo',
        link: 'fii foo',
        scope: informationScopeEnum.warning
      },
      {
        title: '5 an info',
        message: 'Lorem ipsume en dolo',
        link: 'fii foo',
        scope: informationScopeEnum.success
      }
    ]
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  },
  {
    usage: usageEnum.WebApp,
    name: 'fii',
    technologies: [],
    locations: [],
    informations: []
  }
]
