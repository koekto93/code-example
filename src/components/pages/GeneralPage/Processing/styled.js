import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderControl = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputWrapper = styled.div`
  width: 50%;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 20px;
  & button {
    margin-bottom: 15px;
  }
`
