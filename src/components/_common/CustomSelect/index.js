import React from 'react'
import Select, { Option } from 'rc-select'
import 'rc-select/assets/index.css'

import { Container } from './styled'

const CustomSelect = ({ selectOptions, onChange, value }) => {
  const handleChange = value => {
    onChange(value)
  }

  return (
    <Container>
      <Select
        style={{ width: 194, color: 'black' }}
        onChange={handleChange}
        value={value}
      >
        {selectOptions.map(item => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Container>
  )
}

export default CustomSelect
