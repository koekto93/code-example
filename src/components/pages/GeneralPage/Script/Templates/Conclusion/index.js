import React from 'react'

import { Container, Paragraph } from '../styled'

const Conclusion = ({ candidateInfo: { firstName, middleName } }) => {
  return (
    <Container>
      <Paragraph>
        <p>
          Великолепно, {firstName} {middleName}.
        </p>
        <p>
          Давайте подведём итог нашего разговора: Вы записаны на %дата% %время%
        </p>
        <p>
          Обращаю ваше внимание на то, что собеседование пройдёт в групповом
          формате и будет длиться около двух часов.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          По окончании нашего телефонного разговора на вашу почту придёт
          информация с адресом и схемой проезда, а так же вам поступит СМС.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Вам нужно будет иметь при себе паспорт и убедительная просьба не
          опаздывать. Приходите на 15 минут раньше!
        </p>
      </Paragraph>
      <Paragraph>
        <p>Желаю вам удачи на собеседовании. Всего доброго. До свидания.</p>
      </Paragraph>
    </Container>
  )
}

export default Conclusion
