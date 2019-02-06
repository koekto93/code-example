//@flow
import React from 'react'

import { TextArea, ErrorMessage } from '../../../index'

type TextAreaFormProps = {
  input: Object<any>,
  meta: Object<any>,
}

const TextAreaForm = ({ input, meta }: TextAreaFormProps) => {
  return (
    <div>
      <TextArea onChange={input.onChange} value={input.value} />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </div>
  )
}

export default TextAreaForm
