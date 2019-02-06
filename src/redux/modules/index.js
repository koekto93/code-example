import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'

import login from './login'
import generalStore from './general'
import candidateStore from './candidate'

export default combineReducers({
  //routing: routerReducer,
  login,
  generalStore,
  candidateStore,
})
