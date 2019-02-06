import React from 'react'

const StepList = ({ activeStepIndex, children, ...rest }) => {
  const newChildrenContainer = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeStepIndex,
      ...rest,
    })
  })
  return newChildrenContainer
}

export default StepList
