﻿import axios from 'axios'
import { setAuthToken } from '../axiosExtensions'
import history from '../history'

const login_url = '/api/auth/login'

export const apiLogin = fetch => {
  return axios.post(login_url, fetch.payload).then(data => {
    const { token } = data.data
    localStorage.setItem('MassRecruitment-client', token)
    setAuthToken(token)
    history.push('/')
  })
}

export const apiLogout = url => {
  localStorage.removeItem('MassRecruitment-client')
  setAuthToken(false)
  history.go(0)
}
