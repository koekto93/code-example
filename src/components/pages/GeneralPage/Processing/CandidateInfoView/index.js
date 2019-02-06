//@flow
import React from 'react'
import { connect } from 'react-redux'

import { getCandidateInfo } from '../../../../../selectors/processing'
import { Container } from './styled'

type CandidateInfoViewP = {
  candidateInfo: Object<{
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    mail: string,
    citizenship: string,
    age: string,
    position: string,
    salary: string,
  }>,
}

const CandidateInfoView = ({
  candidateInfo: {
    name,
    surname,
    patronymic,
    mail,
    phone,
    citizenship,
    age,
    position,
    salary,
  },
}: CandidateInfoViewP) => {
  return (
    <Container>
      <span className="candidate-full-name">{`${surname} ${name} ${patronymic}`}</span>
      <span className="label">Котакты</span>
      <span>{`Телефон: ${phone}`}</span>
      <span>{`Почта: ${mail}`}</span>
      <span className="label">Информация о кандидате</span>
      <span>{`Возраст: ${age} года`}</span>
      <span>{`Гражданство: ${citizenship}`}</span>
      <span>{`Должность: ${position}`}</span>
      <span>{`Зарплата: ${salary}`}</span>
    </Container>
  )
}

const mapStateToProps = state => ({
  candidateInfo: getCandidateInfo(state),
})

export default connect(mapStateToProps)(CandidateInfoView)
