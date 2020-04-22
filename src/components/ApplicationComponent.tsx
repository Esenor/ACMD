import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Modal, Button, Divider, Empty, List, Table } from 'antd'
import * as IconsFa from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons'
import Title from './Title'
import TagContainer, { tagContainerSizeEnum } from './TagContainer'
import TechnologyTag from './TechnologyTag'
import LocationTag from './LocationTag'
import InformationBadges from './InformationBadges'
import Information from './Information'
import { usageEnum, LocationInterface, TechnologyInterface, InformationInterface } from '../@types/ApplicationComponent'

export interface ApplicationComponentProps {
  usage: usageEnum
  color?: string
  name: string
  summary?: string
  description?: string
  technologies: TechnologyInterface[]
  locations: LocationInterface[]
  informations: InformationInterface[]
}

interface StyledCardProps {
  topColor?: string
}

const ApplicationComponent = ({ informations, name, description, summary, technologies, locations }: ApplicationComponentProps) => {
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
        footer={<Button type='primary' onClick={closeModal}>Ok</Button>}>
        <Divider orientation='left'>Description</Divider>
        <p>{(description) ? description : <Empty/>}</p>
        <Divider orientation='left'>Technologies</Divider>
        <TagContainer size={tagContainerSizeEnum.small}>{technologiesTags}</TagContainer>
        <Divider orientation='left'>Environments locations</Divider>
        <TagContainer size={tagContainerSizeEnum.small}>{locationsTags}</TagContainer>
        <Divider orientation='left'>Uris</Divider>
        <Table columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20%'
          },
          {
            title: 'Uri',
            dataIndex: 'uri',
            key: 'uri'
          }
        ]}
        dataSource={[
          {
            key: '1',
            name: (<><IconsFa.FaGithub color='grey' size='20px' style={{ verticalAlign: 'sub', marginRight: '5px' }}/><strong>GitHub</strong></>),
            uri: 'https://github.com/Esenor/ACMD'
          },
          {
            key: '2',
            name: (<><IconsFa.FaJenkins color='red' size='20px' style={{ verticalAlign: 'sub', marginRight: '5px' }}/><strong>CI Job</strong></>),
            uri: 'https://ci-tool/acmd/job'
          },
          {
            key: '2',
            name: (<><IconsFa.FaDocker color='#0073EC' size='20px' style={{ verticalAlign: 'sub', marginRight: '5px' }}/><strong>Docker FROM</strong></>),
            uri: 'node:14'
          },
          {
            key: '3',
            name: (<><IconsFa.FaDocker color='#0073EC' size='20px' style={{ verticalAlign: 'sub', marginRight: '5px' }}/><strong>Docker Result</strong></>),
            uri: 'Esenor/ACMD:latest'
          }
        ]}/>
        <Divider orientation='left'>Actions</Divider>
        <>
          {
            (informations.length > 0) ?
            <List>
              {
                informations.map((i: InformationInterface, c: number) => (
                  <Information information={i} key={c}/>
                ))
              }
            </List>
            : <Empty/>
          }
        </>
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
    /* cursor: pointer; */
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
