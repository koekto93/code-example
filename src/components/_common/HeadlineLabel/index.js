//@flow
import React from 'react'

import { Label } from './styled'

type HeadlineLabelProps = {
  value: string,
}

//Заголовок карточки со стилями для шрифта

const HeadlineLabel = ({ value }: HeadlineLabelProps) => {
  return <Label>{value}</Label>
}

export default HeadlineLabel
