import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 243px;
  min-width: 598px;
`

export const HistoryItemsWrapper = styled.div`
  height: 173px;
  overflow-y: scroll;
  & > div {
    margin-bottom: 17px;
  }
`
