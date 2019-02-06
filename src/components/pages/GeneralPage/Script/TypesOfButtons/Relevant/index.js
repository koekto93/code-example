//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type RelevantProps = {
  isShowButton: boolean,
  onNextStep: Function,
}

const Relevant = ({ isShowButton, onNextStep }: RelevantProps) => {
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button positiveRole={true} onClick={onNextStep} value="Актуален" />
      </div>
    )
  }
  return null
}

export default Relevant
