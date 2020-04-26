import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Modal, Button, Divider, Empty, Descriptions } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Title from './Title'
import TagContainer, { tagContainerSizeEnum } from './tag/TagContainer'
import TechnologyTag from './tag/TechnologyTag'
import LocationTag from './tag/LocationTag'
import InformationBadges from './InformationBadges'
import InformationList from './list/InformationList'
import UriTable from './table/UriTable'
import { usageEnum, LocationInterface, TechnologyInterface, InformationInterface, UriInterface } from '../@types/ApplicationComponent'

export interface ApplicationComponentProps {
  usage: usageEnum
  name: string
  parentApplication: string
  summary?: string
  description?: string
  uris: UriInterface[]
  technologies: TechnologyInterface[]
  locations: LocationInterface[]
  informations: InformationInterface[]
}

const ApplicationComponent = ({ informations, name, usage, parentApplication, description, summary, technologies, locations, uris }: ApplicationComponentProps) => {
  const [modalIsVisible, changeModalVisibility] = useState(false)
  const closeModal = () => {
    changeModalVisibility(false)
  }
  const openModal = () => {
    changeModalVisibility(true)
  }
  const technologiesTags = technologies.map((t: TechnologyInterface, i) => (
    <TechnologyTag name={t.name} color={t.color} key={i}/>
  ))
  const locationsTags = locations.map((l: LocationInterface, i) => (
    <LocationTag locationType={l.environment} name={l.name} key={i}/>
  ))
  return (
    <>
      <StyledCard>
        <Card actions={[<SearchOutlined onClick={openModal}/>]}>
          <InformationBadges informations={informations} />
          <Title title={name} subtitle={summary} />
          <TagContainer>{technologiesTags}</TagContainer>
          <TagContainer>{locationsTags}</TagContainer>
        </Card>
      </StyledCard>
      <StyledModal
        width='60%'
        title={<Title title={name} subtitle={summary} />}
        visible={modalIsVisible}
        onCancel={closeModal}
        onOk={closeModal}
        footer={<Button type='default' onClick={closeModal}>close</Button>}>
        <Descriptions title='Overview'>
          <Descriptions.Item label='Usage'>{usage}</Descriptions.Item>
          <Descriptions.Item label='Parent application'>{parentApplication}</Descriptions.Item>
        </Descriptions>
        <Divider orientation='left'>Description</Divider>
        <p>{(description) ? description : <Empty/>}</p>
        <Divider orientation='left'>Technologies</Divider>
        <TagContainer size={tagContainerSizeEnum.small}>{technologiesTags}</TagContainer>
        <Divider orientation='left'>Environments locations</Divider>
        <TagContainer size={tagContainerSizeEnum.small}>{locationsTags}</TagContainer>
        <Divider orientation='left'>Uris</Divider>
        <UriTable dataSource={uris}/>
        <Divider orientation='left'>Informations</Divider>
        <InformationList dataSource={informations}/>
      </StyledModal>
    </>
  )
}

const StyledModal = styled(Modal)`
  top: 20px;
  .ant-modal-header {
    border-radius: 5px 5px 0px 0px;
  }
  .ant-modal-content {
    border-radius: 5px;
  }
`

const StyledCard = styled.div`
  .ant-card {
    border-radius: 5px;
    color: #6E6D7A;
    background: #F8F9FB;
    &:hover {
      box-shadow: 10px 10px 17px -6px rgba(194, 194, 194, 0.5);
      .ant-card-actions {
        visibility: visible;
        &:hover {
          background: #E6F7FF;
          transition: all 250ms;
        }
      }
    }
    .ant-card-body {
      min-height: 178px;
      padding: 24px 24px 4px 24px;
    }
    .ant-card-actions {
      height: 47px;
      max-height: 47px;
      visibility: hidden;
      transition: all 150ms;
    }
  }
`

export default ApplicationComponent
