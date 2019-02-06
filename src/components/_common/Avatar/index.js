import React from 'react'

import { Image } from '../index'
import { Container } from './styled'

type AvatarProps = {
  src: string,
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <Container>
      <Image src={src} width="50px" height="50px" alt="avatar" />
    </Container>
  )
}

export default Avatar
