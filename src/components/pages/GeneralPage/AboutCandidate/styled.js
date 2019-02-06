import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  max-height: 331px;
  position: relative;
  /* max-width: 522px; */
`
export const BlackList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 36px;
  background-color: rgba(27, 30, 45, 0.8);
  box-shadow: 0 0 11px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;
`

export const InfoWrapper = styled.div`
  & > div {
    margin-bottom: 17px;
  }
`
