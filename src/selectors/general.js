// @flow
import * as _ from 'lodash'
//import { createSelector } from 'reselect'

export const getSelectedModalName = state =>
  _.get(state, ['generalStore', 'selectedModalName'])

export const getNextCandidateFlag = state =>
  _.get(state, ['generalStore', 'isNextCandidate'])

export const getStepIndex = state => _.get(state, ['generalStore', 'stepIndex'])

export const getTotalSteps = state =>
  _.get(state, ['generalStore', 'totalSteps'])
