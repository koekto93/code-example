import axios from 'axios'

const CANDIDATE_URL = '/api/Processing/GetCandidate'
const SET_SATATUS_URL = '/api/Processing/SetStatus'
const ADD_RECORD_URL = '/api/Processing/AddRecord'

export const apiGetCandidate = () =>
  axios.get(CANDIDATE_URL).then(({ data }) => data)

export const apiSetNewStatus = data =>
  axios
    .post(SET_SATATUS_URL, data)
    .then(({ data }) => ({ result: true, data: data }))
    .catch(({ data }) => data)

export const apiAddRecord = data =>
  axios
    .post(ADD_RECORD_URL, data)
    .then(({ data }) => ({ result: true, data: data }))
    .catch(({ data }) => data)
