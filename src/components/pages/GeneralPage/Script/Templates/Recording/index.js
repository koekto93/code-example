import React from 'react'

import { Container, Paragraph } from '../styled'

const Recording = props => {
  return (
    <Container>
      <Paragraph>
        <p>Спасибо за ответы. Теперь можем записаться на собеседование.</p>
        <p>
          (смотрим ближайшую открытую дату для собеседования и озвучиваем
          кандидату)
        </p>
      </Paragraph>

      <Paragraph>
        <p>Тип оформления вам подходит?</p>
      </Paragraph>
    </Container>
  )
}

export default Recording
