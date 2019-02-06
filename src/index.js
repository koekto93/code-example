//@flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import App from './App'
import Modal from 'react-modal'

import './index.css'

import createStore from './redux/create'
import history from './history'
import { setAuthToken, handleResponse } from './axiosExtensions'

if (localStorage.getItem('MassRecruitment-client')) {
  setAuthToken(localStorage.getItem('MassRecruitment-client'))
}

handleResponse()

const store = createStore()

/* window.store = store */

Modal.setAppElement('#root')

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
