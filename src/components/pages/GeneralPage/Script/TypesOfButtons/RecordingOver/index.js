//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type RecordingOverProps = {
  isShowButton: boolean,
  resetActiveStepIndex: Function,
}

const RecordingOver = ({
  isShowButton,
  resetActiveStepIndex,
}: RecordingOverProps) => {
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button
          positiveRole={true}
          onClick={resetActiveStepIndex}
          value="Запись окончена"
        />
      </div>
    )
  }
  return null
}

export default RecordingOver
