//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type ConfirmationProps = {
  isShowButton: boolean,
  onNextStep: Function,
}

const Confirmation = ({ isShowButton, onNextStep }: ConfirmationProps) => {
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button onClick={onNextStep} value="Да" positiveRole={true} />
      </div>
    )
  }
  return null
}

export default Confirmation
