import React from 'react'
import { connect } from 'react-redux'

import {
  HeadlineBlock,
  HeadlineLabel,
  Card,
  UnitOfInformation,
} from '../../../_common'
import { getCandidateInfo } from '../../../../selectors/candidate'
import { Container, InfoWrapper, BlackList } from './styled'

type AboutCandidateProps = {
  firstName: string,
  lastName: string,
  middleName: string,
  status: string,
  rest: Array,
}

const requiredInformation = {
  age: 'Возраст',
  nationality: 'Национальность',
  location: 'Город проживания',
  mail: 'Email',
  phone: 'Телефон',
  position: 'Должность',
  salary: 'Зарплата',
}

const AboutCandidate = ({
  firstName,
  lastName,
  middleName,
  isBanned,
  ...rest
}: AboutCandidateProps) => {
  const сandidateInformation = Object.entries(rest).map(
    ([key, value]: item, index) =>
      requiredInformation[key] ? (
        <UnitOfInformation
          key={index}
          name={`${requiredInformation[key]}:`}
          value={value}
        />
      ) : null
  )

  const blackListBlackout = isBanned ? (
    <BlackList>
      <span>Чёрный список</span>
    </BlackList>
  ) : null

  return (
    <Card>
      {blackListBlackout}
      <Container>
        <HeadlineBlock>
          <HeadlineLabel value={`${lastName} ${firstName} ${middleName}`} />
        </HeadlineBlock>
        <InfoWrapper>{сandidateInformation}</InfoWrapper>
      </Container>
    </Card>
  )
}

const mapStateToProps = state => ({
  ...getCandidateInfo(state),
})

export default connect(mapStateToProps)(AboutCandidate)
