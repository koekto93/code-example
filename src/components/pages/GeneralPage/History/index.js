import React from 'react'
import { connect } from 'react-redux'

import {
  Card,
  HeadlineBlock,
  HeadlineLabel,
  UnitOfInformation,
} from '../../../_common'
import { getCandidateHistory } from '../../../../selectors/candidate'
import { Container, HistoryItemsWrapper } from './styled'

const History = ({ history }) => {
  const historyItems = history.map(item => (
    <UnitOfInformation key={item.id} name={item.date} value={item.comment} />
  ))
  return (
    <Card>
      <Container>
        <HeadlineBlock>
          <HeadlineLabel value="История контактов" />
        </HeadlineBlock>
        <HistoryItemsWrapper>
          {historyItems && history.length ? historyItems : 'история пуста'}
        </HistoryItemsWrapper>
      </Container>
    </Card>
  )
}

const mapStateToProps = state => ({
  history: getCandidateHistory(state),
})

export default connect(mapStateToProps)(History)
