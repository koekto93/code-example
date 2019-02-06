//@flow
import React from 'react'

import { Block } from './styled'

type HeadlineBlockProps = {
  children: React.ReactNode,
}

//Обёртка для заголовка карточки с нижним бордером
const HeadlineBlock = ({ children }: HeadlineBlockProps) => {
  return <Block>{children}</Block>
}

export default HeadlineBlock
