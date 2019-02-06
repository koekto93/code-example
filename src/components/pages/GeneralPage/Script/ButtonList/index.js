import React from 'react'

import { Container } from './styled'

//описание шагов, на которых находится кнопка "да"
const confirmationActiveSteps = [1, 2, 3]
//описание шагов, на которых находится кнопка "нет"
const notAgreeActiveSteps = [1, 2, 3, 4]

const ButtonList = ({
  activeStepIndex,
  totalSteps,
  onNextStep,
  onChangeStatus,
  setSelectedModalName,
  resetActiveStepIndex,
  children,
  ...rest
}) => {
  const newChildrenContainer = React.Children.map(children, (child, index) => {
    if (child.type.name === 'NotDial') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === 0 ? true : false,
        setNewStatus: () => onChangeStatus('NotDial'),
      })
    } else if (child.type.name === 'NotRelevant') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === 0 ? true : false,
        setNewStatus: () => onChangeStatus('NotRelevant'),
      })
    } else if (child.type.name === 'CallBack') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === 0 ? true : false,
        setSelectedModalName: setSelectedModalName,
      })
    } else if (child.type.name === 'Relevant') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === 0 ? true : false,
        onNextStep: onNextStep,
      })
    } else if (child.type.name === 'Confirmation') {
      return React.cloneElement(child, {
        isShowButton: confirmationActiveSteps.includes(activeStepIndex),
        onNextStep: onNextStep,
      })
    } else if (child.type.name === 'NotAgree') {
      return React.cloneElement(child, {
        isShowButton: notAgreeActiveSteps.includes(activeStepIndex),
        setSelectedModalName: setSelectedModalName,
      })
    } else if (child.type.name === 'Record') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === 4 ? true : false,
        setSelectedModalName: setSelectedModalName,
      })
    } else if (child.type.name === 'RecordingOver') {
      return React.cloneElement(child, {
        isShowButton: activeStepIndex === totalSteps ? true : false,
        resetActiveStepIndex: resetActiveStepIndex,
      })
    }
  })
  return <Container>{newChildrenContainer}</Container>
}

export default ButtonList
