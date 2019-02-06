import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'
import leftColumnImage from '../../../images/login-image.jpg'
import { Container, FirstColumn, SecondColumn } from './styled'

const LoginPage = () => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('MassRecruitment-client')) {
      setRedirect(true)
    }
  }, [])

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <FirstColumn>
        {/* <Logo /> */}
        <Login />
      </FirstColumn>
      <SecondColumn image={`url(${leftColumnImage})`} />
    </Container>
  )
}

export default LoginPage
