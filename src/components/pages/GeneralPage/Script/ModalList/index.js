//@flow
import React from 'react'

type ModalListProps = {
  selectedModalName: string,
  onCloseModal: Function,
  children: React.Node,
  rest: Array<any>,
}
const ModalList = ({
  children,
  selectedModalName,
  onCloseModal,
  ...rest
}: ModalListProps) => {
  const newChildrenContainer = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      selectedModalName: selectedModalName,
      onClose: onCloseModal,
      ...rest,
    })
  })
  return newChildrenContainer
}

export default ModalList
