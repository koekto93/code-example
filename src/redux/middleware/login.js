import { all, takeEvery, call, put } from 'redux-saga/effects'
import { openSnackbar } from '../../components/_common/Notifier'
import { apiLogin, apiLogout } from '../../api/auth'
import {
  FETCH_LOGIN,
  FETCH_LOGOUT,
  fetchLoginFailed,
  fetchLoginSuccess,
} from '../modules/login'

function* login(user) {
  yield all([
    takeEvery(FETCH_LOGIN, function*(user) {
      try {
        yield call(apiLogin, user)
        openSnackbar({ message: 'Вход выполнен' })
        yield put(fetchLoginSuccess())
      } catch (error) {
        openSnackbar({ message: 'Вход не выполнен' })
        yield put(fetchLoginFailed(error))
      }
    }),
    takeEvery(FETCH_LOGOUT, function*() {
      try {
        yield call(apiLogout)
      } catch (error) {
        openSnackbar({ message: 'Выход не выполнен' })
      }
    }),
  ])
}

export default login
