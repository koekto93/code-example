//@flow
import React from 'react'
import { connect } from 'react-redux'

import logoImg from '../../../images/logo.png'
import avatarImg from '../../../images/avatar.png'
import logoutImg from '../../../images/logout.png'
import { fetchLogout } from '../../../redux/modules/login'
import { Card, Image, AvailableCandidates, Avatar } from '../index'
import {
  Container,
  ImageWrapper,
  RightSide,
  LogoutButton,
  ContentWrapper,
} from './styled'

type MenuBarProps = {
  fetchLogout: fetchLogout,
}

const MenuBar = ({ fetchLogout }: MenuBarProps) => {
  const handleClickLogout = () => {
    fetchLogout()
  }
  return (
    <Card>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <Image src={logoImg} width="114px" height="62px" alt="logo" />
          </ImageWrapper>
          <RightSide>
            <AvailableCandidates value={98} />
            <Avatar src={avatarImg} />
            <LogoutButton onClick={handleClickLogout}>
              <Image src={logoutImg} width="35px" height="35px" alt="logout" />
            </LogoutButton>
          </RightSide>
        </ContentWrapper>
      </Container>
    </Card>
  )
}

export default connect(
  null,
  { fetchLogout }
)(MenuBar)
