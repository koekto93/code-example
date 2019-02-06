import React from 'react'

import { Container, Paragraph } from '../styled'

const Conditions = () => {
  return (
    <Container>
      <Paragraph>
        <p>УСЛОВИЯ</p>
        <p>График: 5/2, с плавающими выходными</p>
      </Paragraph>
      <Paragraph>
        <p>
          Офисы расположены на м.Таганская и Университет в шаговой доступности
          от метро, исходя из ваших пожеланий.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Зарплата состоит из 2-х частей:</p>
        <p>
          Фиксированного оклада 17 000 р., это ваша подушка безопасности,
          средняя премия 3 000 р., а максимальная составляет 11 200 р.. Причём в
          премию вы входите с первого месяца работы. Совокупный доход на старте
          начинается от 19 100 р..
        </p>
      </Paragraph>
      <Paragraph>
        <p>Такой уровень дохода вас устроит?</p>
      </Paragraph>
    </Container>
  )
}

export default Conditions
