//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type NotRelevantProps = {
  isShowButton: boolean,
  setNewStatus: Function,
}

const NotRelevant = ({ isShowButton, setNewStatus }: NotRelevantProps) => {
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button
          onClick={setNewStatus}
          value="Не актуален"
          negativeRole={true}
        />
      </div>
    )
  }
  return null
}

export default NotRelevant
