import React from 'react'

import { Container, Paragraph } from '../styled'

const Greeting = ({ candidateInfo: { firstName, middleName } }) => {
  return (
    <Container>
      <Paragraph>
        <p>
          Добрый день, {firstName} {middleName}.
        </p>
        <p>
          Меня зовут Алиса, я являюсь HR менеджером компании SkyPro и звоню по
          поводу трудоустройства.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Подскажите, актуален поиск работы?</p>
      </Paragraph>
      <Paragraph>
        <p>Отлично. Перейду к презентации вакансии нашей компании. </p>
      </Paragraph>
    </Container>
  )
}

export default Greeting
