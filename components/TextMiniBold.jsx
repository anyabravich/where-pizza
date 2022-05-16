import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { TextMiniBox } from './TextMini'

const TextMiniBold = ({children}) => {
  return (
    <TextMiniBoldBox>{children}</TextMiniBoldBox>
  )
}

const TextMiniBoldBox = styled(TextMiniBox)`
  font-weight: 600;
`

export default TextMiniBold