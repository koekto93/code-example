// @flow
import * as _ from 'lodash'

export const getSuccessLogin = state => _.get(state, ['login', 'isSuccess'])
