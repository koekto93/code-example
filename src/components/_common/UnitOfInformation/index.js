//@flow
import React from 'react'

import { UnitContainer, InfoName } from './styled'

type UnitOfInformationProps = {
  name: string,
  value: string,
}

const UnitOfInformation = ({ name, value }: UnitOfInformationProps) => {
  return (
    <UnitContainer>
      <InfoName>{name}</InfoName> <span>{value ? value : 'Нет данных'}</span>
    </UnitContainer>
  )
}

export default UnitOfInformation
