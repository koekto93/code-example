import React, { useState } from 'react'

export default ComposedComponent => props => {
  const [selectedModalName, setSelectedModalName] = useState(null)

  const onChangeSelectedModalName = type =>
    setSelectedModalName(type ? type : null)

  return (
    <ComposedComponent
      selectedModalName={selectedModalName}
      onChangeSelectedModalName={onChangeSelectedModalName}
      {...props}
    />
  )
}
