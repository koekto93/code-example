import React from 'react'

import StepList from './StepList'
import Step from './Step'
import ButtonList from './ButtonList'
import ModalList from './ModalList'
import FormWizard from './FormWizard'
import { Container } from './styled'
import {
  Card,
  HeadlineBlock,
  HeadlineLabel,
  RecordingInterviewModal,
  CallBackModal,
  CommentModal,
} from '../../../_common'
import {
  Greeting,
  VacancyDescription,
  Conditions,
  Registration,
  Recording,
  Conclusion,
} from './Templates'
import {
  Relevant,
  CallBack,
  Confirmation,
  NotAgree,
  NotDial,
  NotRelevant,
  Record,
  RecordingOver,
} from './TypesOfButtons'

const Script = () => {
  return (
    <Card>
      <Container>
        <HeadlineBlock>
          <HeadlineLabel value="Скрипт" />
        </HeadlineBlock>
        <FormWizard>
          <StepList>
            <Step render={Greeting} />
            <Step render={VacancyDescription} />
            <Step render={Conditions} />
            <Step render={Registration} />
            <Step render={Recording} />
            <Step render={Conclusion} />
          </StepList>
          <ButtonList>
            <NotDial />
            <CallBack modalName="CallBackModal" />
            <NotRelevant />
            <Relevant />
            <Confirmation />
            <Record modalName="RecordingInterviewModal" />
            <NotAgree modalName="CommentModal" />
            <RecordingOver />
          </ButtonList>
          <ModalList>
            <CallBackModal />
            <RecordingInterviewModal />
            <CommentModal status="NotAgree" text="Комментарий" />
          </ModalList>
        </FormWizard>
      </Container>
    </Card>
  )
}

export default Script

//для добавления шага необходимо добавить в качестве дочернего элемента в <StepList>

//для добавления модального окна необходимо добавить в качестве
//дочернего элемента в <ModalList> и прописать название модального
//окна в кнопку, которая должна его открывать
