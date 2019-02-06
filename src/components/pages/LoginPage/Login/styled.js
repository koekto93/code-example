import styled from 'styled-components'

const marginBottomValue = '16px'

export const Container = styled.div``

export const LoginFormContainer = styled.div`
  margin-top: 40px;
`
export const LoginForm = styled.form``

export const BlockOfControls = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${marginBottomValue}

  & > div:first-child {
    margin-bottom: 10px;
  }
`

export const FieldWrapper = styled.div``

export const Label = styled.p`
  margin-bottom: 6px;
`

export const PageTitleBlock = styled.div`
  font-size: 38px;
  color: #1b1e2d;
`
