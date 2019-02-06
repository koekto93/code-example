//@flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import PrivateRoute from '../layouts/PrivateRoute'
import GeneralPage from './GeneralPage'
import LoginPage from './LoginPage'
import { Notifier } from '../_common/index'

import { Container } from './styled'

const Pages = (props: {}) => {
  return (
    <Router>
      <Container>
        <Switch>
          <Redirect exact from="/" to="/generalPage" />
          <Route path="/loginPage" component={LoginPage} />
          {/* <Route path="/generalPage" component={GeneralPage} /> */}
          <PrivateRoute path="/generalPage" component={GeneralPage} />
        </Switch>
        <Notifier />
      </Container>
    </Router>
  )
}

export default Pages
