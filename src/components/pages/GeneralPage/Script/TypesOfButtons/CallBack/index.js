import React from 'react'

import { Button } from '../../../../../_common'

type CallBackProps = {
  isShowButton: boolean,
  modalName: string,
  setSelectedModalName: Function,
}

const CallBack = ({
  isShowButton,
  modalName,
  setSelectedModalName,
}: CallBackProps) => {
  const handleClick = () => {
    setSelectedModalName(modalName)
  }
  if (isShowButton) {
    return (
      <div className="simple-button">
        <Button onClick={handleClick} value="Перезвонить" positiveRole={true} />
      </div>
    )
  }
  return null
}

export default CallBack
