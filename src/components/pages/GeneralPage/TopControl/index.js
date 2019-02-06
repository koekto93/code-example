//@flow
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { Button, Checkbox, CommentModal } from '../../../_common'
import withModal from '../../../_decorators/withModal'
import { setNextCandidateFlag } from '../../../../redux/modules/general'
import {
  fetchCandidate,
  setCandidateStatus,
} from '../../../../redux/modules/candidate'

import { getNextCandidateFlag } from '../../../../selectors/general'
import { getCandidateId } from '../../../../selectors/candidate'

import {
  Container,
  ButtonsControl,
  LeftSideBlock,
  ContentWrapper,
} from './styled'

type TopControlProps = {
  isNextCandidate: boolean,
  setNextCandidateFlag: setNextCandidateFlag,
  fetchCandidate: fetchCandidate,
  setCandidateStatus: setCandidateStatus,
  selectedModalName: string,
  onChangeSelectedModalName: Function,
  id: string,
}
const TopControl = ({
  isNextCandidate,
  setNextCandidateFlag,
  fetchCandidate,
  setCandidateStatus,
  selectedModalName,
  onChangeSelectedModalName,
  id,
}: TopControlProps) => {
  const handleClickFetchCandidate = () => {
    fetchCandidate()
  }
  const handleClickTimeout = () => {
    //console.log('fetch onClickTimeout')
  }
  const handleClickBlackList = () => {
    onChangeSelectedModalName('CommentModal')
  }
  const handleChangeCandidateFlag = event => {
    setNextCandidateFlag(!isNextCandidate)
  }

  return (
    <Container>
      <ContentWrapper>
        <ButtonsControl>
          <LeftSideBlock>
            <div className="simple-button">
              <Button
                value="Следующий кандидат"
                onClick={handleClickFetchCandidate}
                className="simple-button"
              />
            </div>
            <div className="simple-button">
              <Button value="Перерыв" onClick={handleClickTimeout} />
            </div>
          </LeftSideBlock>
          <div className="simple-button">
            <Button value="Чёрный список" onClick={handleClickBlackList} />
          </div>
        </ButtonsControl>

        <Checkbox
          onChange={handleChangeCandidateFlag}
          checked={isNextCandidate}
          label="Получить следующего"
        />
      </ContentWrapper>
      <CommentModal
        selectedModalName={selectedModalName}
        onClose={() => onChangeSelectedModalName(null)}
        text="Черный список"
        status="BlackList"
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  isNextCandidate: getNextCandidateFlag(state),
  id: getCandidateId(state),
})

export default compose(
  connect(
    mapStateToProps,
    { setNextCandidateFlag, fetchCandidate, setCandidateStatus }
  ),
  withModal
)(TopControl)
