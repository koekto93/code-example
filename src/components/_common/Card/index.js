import React from 'react'

import { CardWrapper } from './styled'

const Card = props => {
  return <CardWrapper>{props.children}</CardWrapper>
}

export default Card
