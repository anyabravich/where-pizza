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
`

export default TextMiniBold