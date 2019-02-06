//@flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import { Route, Switch, Redirect } from 'react-router-dom'

import Script from './Script'
import AboutCandidate from './AboutCandidate'
import History from './History'
import TopControl from './TopControl'
import { getCandidateLoadingStatus } from '../../../selectors/candidate'
import { fetchCandidate } from '../../../redux/modules/candidate'
import { MenuBar, Loader } from '../../_common/index'
import {
  Container,
  Content,
  LeftSideContainer,
  ContentWrapper,
  MenuBarWrapper,
  Cards,
} from './styled'

type GeneralPageProps = {
  isLoading: boolean,
  fetchCandidate: fetchCandidate,
}

const GeneralPage = ({ isLoading, fetchCandidate }: GeneralPageProps) => {
  useEffect(() => {
    fetchCandidate()
  }, [])

  if (isLoading) {
    return <Loader />
  }
  return (
    <Container>
      <MenuBarWrapper>
        <MenuBar />
      </MenuBarWrapper>
      <ContentWrapper>
        <TopControl />
        <Content>
          <Cards>
            <LeftSideContainer>
              <AboutCandidate />
              <History />
            </LeftSideContainer>
            <Script />
          </Cards>
        </Content>
      </ContentWrapper>
    </Container>
  )
}

const mapStateToProps = state => ({
  isLoading: getCandidateLoadingStatus(state),
})

export default connect(
  mapStateToProps,
  { fetchCandidate }
)(GeneralPage)
