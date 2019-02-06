const module = 'login'

export const FETCH_LOGIN = `${module}/FETCH_LOGIN`
export const FETCH_LOGIN_FAILED = `${module}/FETCH_LOGIN_FAILED`
export const FETCH_LOGIN_SUCCESS = `${module}/FETCH_LOGIN_SUCCESS`
export const FETCH_LOGOUT = `${module}/FETCH_LOGOUT`

type State = {
  +errorMessage: string,
  +isSuccess: boolean,
}

const defaultState: State = {
  errorMessage: '',
  isSuccess: false,
}

export default function reducer(loginState = defaultState, action = {}) {
  const { type } = action
  switch (type) {
    case FETCH_LOGIN:
      return { ...loginState }
    case FETCH_LOGIN_FAILED:
      return {
        ...loginState,
        errorMessage: 'Введён неверный номер телефона или пароль',
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...loginState,
        isSuccess: true,
        errorMessage: '',
      }
    case FETCH_LOGOUT:
      return {
        ...loginState,
        errorMessage: '',
      }
    default:
      return loginState
  }
}

export const fetchLogin = user => ({
  type: FETCH_LOGIN,
  payload: user,
})

export const fetchLoginFailed = error => ({
  type: FETCH_LOGIN_FAILED,
  payload: error,
})

export const fetchLoginSuccess = () => ({
  type: FETCH_LOGIN_SUCCESS,
})

export const fetchLogout = () => ({
  type: FETCH_LOGOUT,
})
