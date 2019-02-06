//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type RecordProps = {
  isShowButton: boolean,
  setNewStatus: Function,
  modalName: string,
  setSelectedModalName: Function,
}

const Record = ({
  isShowButton,
  setNewStatus,
  modalName,
  setSelectedModalName,
}: RecordProps) => {
  const handleClick = () => {
    setSelectedModalName(modalName)
  }
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button
          onClick={handleClick}
          value="Запись на собеседование"
          positiveRole={true}
        />
      </div>
    )
  }
  return null
}

export default Record
