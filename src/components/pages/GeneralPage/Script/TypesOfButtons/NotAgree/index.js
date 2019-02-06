//@flow
import React from 'react'

import { Button } from '../../../../../_common'

type NotAgreeProps = {
  isShowButton: boolean,
  modalName: string,
  setSelectedModalName: Function,
}

const NotAgree = ({
  isShowButton,
  modalName,
  setSelectedModalName,
}: NotAgreeProps) => {
  const handleClick = () => {
    setSelectedModalName(modalName)
  }
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button onClick={handleClick} value="Нет" negativeRole={true} />
      </div>
    )
  }
  return null
}

export default NotAgree
