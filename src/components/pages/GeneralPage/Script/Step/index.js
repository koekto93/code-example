//@flow
import React from 'react'

type StepProps = {
  isActive: boolean,
  render: (rest: Object) => React.Node,
}

const Step = ({ isActive, render, ...rest }: StepProps) => {
  if (isActive) {
    return <React.Fragment>{render(rest)}</React.Fragment>
  }

  return null
}

export default Step
