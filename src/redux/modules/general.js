//@flow
const module = 'general'

export const SET_SELECTED_MODAL_NAME = `${module}/SET_SELECTED_MODAL_NAME`
export const SET_NEXT_CANDIDATE_FLAG = `${module}/SET_NEXT_CANDIDATE_FLAG`
export const SET_TOTAL_STEP = `${module}/SET_TOTAL_STEP`
export const SET_STEP_INDEX = `${module}/SET_STEP_INDEX`

type State = {
  +selectedModalName: string,
  +isNextCandidate: boolean,
  +stepIndex: number,
  +totalSteps: number,
  +availableCandidates: string | number,
  +errorMessage: string,
  +isLoading: boolean,
}

const defaultState: State = {
  selectedModalName: '',
  stepIndex: 0,
  totalSteps: 0,
  isNextCandidate: false,
  availableCandidates: 98,
  errorMessage: '',
  isLoading: false,
}

export default function reducer(generalState = defaultState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case SET_SELECTED_MODAL_NAME:
      return {
        ...generalState,
        selectedModalName: payload,
      }
    case SET_NEXT_CANDIDATE_FLAG:
      return {
        ...generalState,
        isNextCandidate: payload,
      }
    case SET_STEP_INDEX:
      return {
        ...generalState,
        stepIndex: payload,
      }
    case SET_TOTAL_STEP:
      return {
        ...generalState,
        totalSteps: payload,
      }

    default:
      return generalState
  }
}

export const setSelectedModalName = modalName => ({
  type: SET_SELECTED_MODAL_NAME,
  payload: modalName,
})

export const setNextCandidateFlag = value => ({
  type: SET_NEXT_CANDIDATE_FLAG,
  payload: value,
})

export const setTotalSteps = value => ({
  type: SET_TOTAL_STEP,
  payload: value,
})

export const setStepIndex = value => ({
  type: SET_STEP_INDEX,
  payload: value,
})
