import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { getCandidateInfo } from '../../../../../selectors/candidate'
import {
  setCandidateStatus,
  fetchCandidate,
} from '../../../../../redux/modules/candidate'
import {
  getSelectedModalName,
  getStepIndex,
  getTotalSteps,
  getNextCandidateFlag,
} from '../../../../../selectors/general'
import {
  setTotalSteps,
  setStepIndex,
  setSelectedModalName,
} from '../../../../../redux/modules/general'
import withModal from '../../../../_decorators/withModal'

import { Container } from './styled'

type FormWizardProps = {
  children: React.ReactNodeArray | React.ReactNode,
  candidateInfo: Object,
  selectedModalName: string,
  onChangeSelectedModalName: Function,
  setStepIndex: setStepIndex,
  setTotalSteps: setTotalSteps,
  setCandidateStatus: setCandidateStatus,
  fetchCandidate: fetchCandidate,
  isNextCandidate: boolen,
  activeStepIndex: number,
  totalSteps: number,
  rest: Array,
}

const FormWizard = ({
  children,
  //REDUX
  setSelectedModalName,
  selectedModalName,
  isNextCandidate,
  setStepIndex,
  setTotalSteps,
  activeStepIndex,
  totalSteps,
  candidateInfo,
  setCandidateStatus,
  fetchCandidate,
  ...rest
}: FormWizardProps) => {
  const getTotalSteps = children => {
    for (let child of children) {
      if (child.type.name === 'StepList') {
        setTotalSteps(child.props.children.length - 1)
      }
    }
  }

  const onChangeStatus = status => {
    setCandidateStatus({
      CandidateId: candidateInfo.id,
      Status: status,
    })
  }

  const resetActiveStepIndex = () => {
    setStepIndex(0)
    if (isNextCandidate) {
      fetchCandidate()
    }
  }

  useEffect(() => {
    getTotalSteps(children)
  }, [])

  const newChildrenContainer = React.Children.map(children, child => {
    if (child.type.name === 'StepList') {
      return React.cloneElement(child, {
        candidateInfo: candidateInfo,
        activeStepIndex: activeStepIndex,
      })
    } else if (child.type.name === 'ButtonList') {
      return React.cloneElement(child, {
        activeStepIndex: activeStepIndex,
        totalSteps: totalSteps,
        onChangeStatus: onChangeStatus,
        setSelectedModalName: setSelectedModalName,
        resetActiveStepIndex: resetActiveStepIndex,
        onNextStep: () => setStepIndex(activeStepIndex + 1),
      })
    } else if (child.type.name === 'ModalList') {
      return React.cloneElement(child, {
        selectedModalName: selectedModalName,
        onCloseModal: () => setSelectedModalName(null),
      })
    } else {
      return child
    }
  })

  return <Container>{newChildrenContainer}</Container>
}

const mapStateToProps = state => ({
  candidateInfo: getCandidateInfo(state),
  selectedModalName: getSelectedModalName(state),
  activeStepIndex: getStepIndex(state),
  totalSteps: getTotalSteps(state),
  isNextCandidate: getNextCandidateFlag(state),
})

export default compose(
  connect(
    mapStateToProps,
    {
      setTotalSteps,
      setStepIndex,
      setSelectedModalName,
      setCandidateStatus,
      fetchCandidate,
    }
  ),
  withModal
)(FormWizard)
