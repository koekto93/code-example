import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MenuBarWrapper = styled.div`
  margin-bottom: 53px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 42px;
  margin-bottom: 20px;
`

export const Content = styled.div``

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const LeftSideContainer = styled.div`
  margin-right: 42px;
  & > div:first-child {
    margin-bottom: 42px;
  }
`
