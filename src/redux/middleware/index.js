import { all, fork } from 'redux-saga/effects'

import login from './login'
import candidate from './candidate'

export default function rootMiddleware() {
  return function*() {
    yield all([fork(login), fork(candidate)])
  }
}
