//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type NotDialProps = {
  isShowButton: boolean,
  setNewStatus: Function,
}

const NotDial = ({ isShowButton, setNewStatus }: NotDialProps) => {
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button
          onClick={setNewStatus}
          value="Не дозвонился"
          negativeRole={true}
        />
      </div>
    )
  }
  return null
}

export default NotDial
