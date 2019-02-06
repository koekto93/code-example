//@flow
import React from 'react'

import { Container } from './styled'

type AvailableCandidatesProps = {
  value: number | string,
}

const AvailableCandidates = ({ value }: AvailableCandidatesProps) => {
  return (
    <Container>
      <span>Доступно {value} кандидатов</span>
    </Container>
  )
}

export default AvailableCandidates
