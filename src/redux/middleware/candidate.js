import { takeEvery, call, put, all, select } from 'redux-saga/effects'

import { openSnackbar } from '../../components/_common/Notifier'
import {
  apiGetCandidate,
  apiAddRecord,
  apiSetNewStatus,
} from '../../api/candidate'
import {
  FETCH_CANDIDATE,
  SET_CANDIDATE_STATUS,
  ADD_RECORD,
  fetchCandidate,
  fetchCandidateFailed,
  fetchCandidateSuccess,
} from '../modules/candidate'
import { getStepIndex, getNextCandidateFlag } from '../../selectors/general'
import { setSelectedModalName, setStepIndex } from '../modules/general'

function* candidate() {
  yield all([
    takeEvery(FETCH_CANDIDATE, function*(user) {
      try {
        const candidate = yield call(apiGetCandidate)
        yield put(setStepIndex(0))
        yield put(fetchCandidateSuccess(candidate))
      } catch (error) {
        yield put(fetchCandidateFailed())
      }
    }),
    takeEvery(SET_CANDIDATE_STATUS, function*({ payload }) {
      try {
        yield call(apiSetNewStatus, payload)
        openSnackbar({ message: 'Успешное выставление статуса' })
        //ресетим шаг мастера
        yield put(setStepIndex(0))
        //нулим модалку при всех типах статусов
        yield put(setSelectedModalName(null))
        //чекаем нужно ли делать запрос за новым человеком
        const isNextFlag = yield select(getNextCandidateFlag)
        if (isNextFlag) yield put(fetchCandidate())
      } catch (error) {
        openSnackbar({ message: 'Статус не выставлен. Ошибка сервера' })
      }
    }),
    takeEvery(ADD_RECORD, function*({ payload }) {
      try {
        yield call(apiAddRecord, payload)
        //ресетим шаг мастера
        const stepIndex = yield select(getStepIndex)
        yield put(setStepIndex(stepIndex + 1))
        //нулим модалку
        yield put(setSelectedModalName(null))
        openSnackbar({ message: 'Кандидат записан на собеседование' })
      } catch (error) {
        openSnackbar({ message: 'Ошибка записи на собеседование' })
      }
    }),
  ])
}

export default candidate
