//@flow
const module = 'candidate'

export const FETCH_CANDIDATE = `${module}/FETCH_CANDIDATE`
export const FETCH_CANDIDATE_FAILED = `${module}/FETCH_CANDIDATE_FAILED`
export const FETCH_CANDIDATE_SUCCESS = `${module}/FETCH_CANDIDATE_SUCCESS`
export const SET_CANDIDATE_STATUS = `${module}/SET_CANDIDATE_STATUS`
export const ADD_RECORD = `${module}/ADD_RECORD`

type State = {
  +candidate: Object<{
    +id: string,
    +name: string,
    +surname: string,
    +patronymic: string,
    +phone: string,
    +mail: string,
    +citizenship: string,
    +age: string,
    +position: string,
    +salary: string,
    +isBanned: boolean,
    +history: Array<{
      +id: string,
      +date: string,
      +comment: string,
    }>,
  }>,
  +isLoading: boolean,
}

const defaultState: State = {
  candidate: {
    id: '1',
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    mail: '',
    citizenship: '',
    nationality: '',
    age: '',
    location: '',
    position: '',
    salary: '',
    skype: '',
    isBanned: false,
    history: [],
  },
  isLoading: true,
}

export default function reducer(candidateState = defaultState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case FETCH_CANDIDATE:
      return { ...candidateState, isLoading: true }
    case FETCH_CANDIDATE_SUCCESS:
      return {
        ...candidateState,
        candidate: { ...candidateState.candidate, ...payload },
        isLoading: false,
      }
    case FETCH_CANDIDATE_FAILED:
      return {
        ...candidateState,
        isLoading: false,
      }

    default:
      return candidateState
  }
}

export const fetchCandidate = () => ({
  type: FETCH_CANDIDATE,
})

export const fetchCandidateSuccess = candidate => ({
  type: FETCH_CANDIDATE_SUCCESS,
  payload: candidate,
})

export const fetchCandidateFailed = () => ({
  type: FETCH_CANDIDATE_FAILED,
})

export const setCandidateStatus = data => ({
  type: SET_CANDIDATE_STATUS,
  payload: data,
})

export const addRecord = data => ({
  type: ADD_RECORD,
  payload: data,
})
