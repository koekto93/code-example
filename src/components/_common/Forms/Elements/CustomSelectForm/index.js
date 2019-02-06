import React from 'react'

import { CustomSelect, ErrorMessage } from '../../../index'

const CustomSelectForm = ({ input, meta, selectOptions }) => {
  return (
    <div>
      <CustomSelect
        selectOptions={selectOptions}
        onChange={input.onChange}
        value={input.value}
      />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </div>
  )
}

export default CustomSelectForm
