import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { TextMiniBox } from './TextMini'

const TextMiniBold = ({children, pl}) => {
  return (
    <TextMiniBoldBox pl={pl}>{children}</TextMiniBoldBox>
  )
}

const TextMiniBoldBox = styled(TextMiniBox)`
  font-weight: 600;
  padding-left: ${props => rem(props.pl)};
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${rem(12)};
  }
`

export default TextMiniBold