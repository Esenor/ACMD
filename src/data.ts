import { ApplicationComponentInterface, environmentEnum, usageEnum, informationScopeEnum, iconEnum } from './@types/ApplicationComponent'
import faker from 'faker'

const getStub = (usage: usageEnum): ApplicationComponentInterface => {
  const name: string = `${faker.company.companyName()}:${faker.internet.domainName()}`
  return {
    usage,
    name,
    summary: faker.lorem.sentence(),
    description: faker.lorem.paragraph(10),
    technologies: [...new Array(faker.random.number(4))].map(i => {
      return {
        name: faker.random.words(2),
        color: faker.internet.color()
      }
    }),
    uris: [
      {
        icon: iconEnum.github,
        name: 'Github',
        link: faker.internet.url()
      },
      {
        icon: iconEnum.jenkins,
        name: 'Jenkins CI',
        link: faker.internet.url()
      },
      {
        icon: iconEnum.docker,
        name: 'Docker from image',
        link: faker.random.uuid()
      },
      {
        icon: iconEnum.docker,
        name: 'Docker result image',
        link: faker.random.uuid()
      }
    ],
    locations: [
      {
        name: faker.internet.domainName(),
        environment: environmentEnum.prod
      },
      {
        name: faker.internet.domainName(),
        environment: environmentEnum.preprod
      },
      {
        name: faker.internet.domainName(),
        environment: environmentEnum.qa
      }
    ],
    informations: (faker.random.boolean()) ? [
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: `${faker.internet.url()}${faker.internet.url()}${faker.internet.url()}`,
          scope: informationScopeEnum.error
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: `${faker.internet.url()}${faker.internet.url()}${faker.internet.url()}`,
          scope: informationScopeEnum.warning
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: `${faker.internet.url()}${faker.internet.url()}${faker.internet.url()}`,
          scope: informationScopeEnum.success
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: `${faker.internet.url()}${faker.internet.url()}${faker.internet.url()}`,
          scope: informationScopeEnum.info
        }
      })
    ] : []
  }
}

export const applicationComponentsData: ApplicationComponentInterface[] = [
  getStub(usageEnum.asset),getStub(usageEnum.asset),getStub(usageEnum.asset),getStub(usageEnum.asset),getStub(usageEnum.asset),getStub(usageEnum.asset),getStub(usageEnum.asset),
  getStub(usageEnum.webApplication),getStub(usageEnum.webApplication),getStub(usageEnum.webApplication),
  getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),
  getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),
  getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),getStub(usageEnum.service),
  getStub(usageEnum.backend),getStub(usageEnum.backend),getStub(usageEnum.backend),getStub(usageEnum.backend)
]
