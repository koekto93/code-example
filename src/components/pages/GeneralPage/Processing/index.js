import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import CandidateInfoView from './CandidateInfoView'
import { Button, Input, InputSearch } from '../../../_common/index'
import { getCandidateId } from '../../../../selectors/processing'
import { fetchCandidate } from '../../../../redux/modules/processing'
import { apiSetNewStatus } from '../../../../api/processing'
import { buttonsControl } from '../../../../constants'

import {
  Container,
  HeaderControl,
  InputWrapper,
  ButtonsContainer,
} from './styled'

type ProcessingProps = {
  fetchCandidate: fetchCandidate,
  fullName: string,
  mail: string,
  phone: string,
  id: string,
}

const Processing = ({ fetchCandidate, id }: ProcessingProps) => {
  const [commentValue, setCommentValue] = useState('')
  useEffect(() => {
    fetchCandidate()
  }, [])

  const onGetNewCandidate = () => {
    fetchCandidate()
  }

  const onChangeCandidateStatus = event => {
    //TODO Изменение статуса
    //console.log('send request')
    const name = event.currentTarget.name
    var data = {
      CandidateId: id,
      Status: name,
      Comment: commentValue,
    }
    apiSetNewStatus(data)
  }

  const onChangeCommentValue = value => {
    setCommentValue(value)
  }

  return (
    <Container>
      <HeaderControl>
        <Button value="Следующий кандидат" onClick={onGetNewCandidate} />
        <InputSearch />
      </HeaderControl>
      <InputWrapper>
        <Input
          fullWidth={true}
          miltiline={true}
          label="Комментарий к действию"
          onChange={onChangeCommentValue}
          value={commentValue}
        />
      </InputWrapper>
      <CandidateInfoView />
      <ButtonsContainer>
        {buttonsControl.map((item, index) => (
          <Button
            name={item.name}
            key={index}
            value={item.value}
            onClick={onChangeCandidateStatus}
          />
        ))}
      </ButtonsContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  id: getCandidateId(state),
})

export default connect(
  mapStateToProps,
  { fetchCandidate }
)(Processing)
