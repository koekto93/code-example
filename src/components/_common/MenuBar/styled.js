import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1410px;
  max-height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  /* cursor: pointer; */
`

export const RightSide = styled.div`
  width: 30%;
  max-height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > div:nth-child(1) {
    margin-right: 58px;
  }

  & > div:nth-child(2) {
    margin-right: 28px;
  }
`

export const LogoutButton = styled.div`
  cursor: pointer;
`
