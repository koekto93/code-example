import React from 'react'

import { Container, Paragraph } from '../styled'

const VacancyDescription = props => {
  return (
    <Container>
      <Paragraph>
        <p>О КОМПАНИИ</p>
        <p>
          Компания SkyPro - лидер по разработке портальных решений и CRM-систем
          для крупных корпораций Мы имеем более 10 тысяч клиентов по всему миру
          и наш бизнес растёт более чем 3 раза в год.
        </p>
      </Paragraph>
      <Paragraph>
        <p>ФУНКЦИОНАЛ</p>
        <p>
          Хотела(а) бы предложить вам одну из ключевых вакансий - "Специалист
          отдела продаж". Вы будете осуществлять продажу.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Данный функционал вам интересен?</p>
      </Paragraph>
    </Container>
  )
}

export default VacancyDescription
