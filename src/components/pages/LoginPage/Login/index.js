//@flow
import React from 'react'
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { InputForm } from '../../../_common/Forms/Elements'
import { Button } from '../../../_common'
import {
  LoginFormContainer,
  BlockOfControls,
  FieldWrapper,
  Container,
  Label,
  PageTitleBlock,
} from './styled'
import { fetchLogin } from '../../../../redux/modules/login'
import { getSuccessLogin } from '../../../../selectors/login'

type LoginProps = {
  isSuccess: boolean,
  fetchLogin: fetchLogin,
}

type ValuesType = {
  login: string,
  password: string,
}

const Login = ({ fetchLogin, isSuccess }: LoginProps) => {
  const required = (value: ?string) => (value ? undefined : 'Заполните поле')

  const onSubmit = ({ login, password }: ValuesType) => {
    fetchLogin({
      Login: login,
      Password: password,
    })
  }

  if (isSuccess) return <Redirect to="/" />

  return (
    <Container>
      <PageTitleBlock>Подбор персонала</PageTitleBlock>
      <LoginFormContainer>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <BlockOfControls>
                {[
                  <FieldWrapper key="login">
                    <Label>Ваш логин</Label>
                    <Field
                      name="login"
                      component={InputForm}
                      validate={required}
                    />
                  </FieldWrapper>,
                  <FieldWrapper key="password">
                    <Label>Ваш пароль</Label>
                    <Field
                      name="password"
                      component={InputForm}
                      validate={required}
                      type="password"
                    />
                  </FieldWrapper>,
                ]}
              </BlockOfControls>

              <div className="medium-button">
                <Button type="submit" value="Войти" />
              </div>
            </form>
          )}
        />
      </LoginFormContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  isSuccess: getSuccessLogin(state),
})

export default connect(
  mapStateToProps,
  { fetchLogin }
)(Login)
