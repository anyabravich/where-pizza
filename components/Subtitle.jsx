import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Subtitle = ({children, mb, color}) => {
  return (
    <SubtitleBox mb={mb} color={color}>{children}</SubtitleBox>
  )
}

const SubtitleBox = styled.p`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${props => props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.black};
  margin-bottom: ${props => `${props.mb}px`};
`

export default Subtitle