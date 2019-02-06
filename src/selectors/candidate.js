// @flow
import * as _ from 'lodash'
import { createSelector } from 'reselect'

export const getCandidateId = state =>
  _.get(state, ['candidateStore', 'candidate', 'id'])

export const getCandidateHistory = state =>
  _.get(state, ['candidateStore', 'candidate', 'history'])

export const getCandidateInfo = state =>
  _.get(state, ['candidateStore', 'candidate'])

export const getCandidateLoadingStatus = state =>
  _.get(state, ['candidateStore', 'isLoading'])

export const getFirstLastName = createSelector(
  getCandidateInfo,
  ({ name, surname }) => {
    return `${surname} ${name}`
  }
)

export const getFullName = createSelector(
  getCandidateInfo,
  ({ name, surname, patronymic }) => {
    return `${surname} ${name} ${patronymic}`
  }
)
