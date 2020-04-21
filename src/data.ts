import { ApplicationComponentInterface, environmentEnum, usageEnum, informationScopeEnum } from './@types/ApplicationComponent'
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
        name: faker.hacker.abbreviation(),
        color: faker.internet.color()
      }
    }),
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
          link: faker.internet.url(),
          scope: informationScopeEnum.info
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: faker.internet.url(),
          scope: informationScopeEnum.error
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: faker.internet.url(),
          scope: informationScopeEnum.warning
        }
      }),
      ...[...new Array(faker.random.number(3))].map(i => {
        return {
          title: name,
          message: faker.lorem.sentences(2),
          link: faker.internet.url(),
          scope: informationScopeEnum.success
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
