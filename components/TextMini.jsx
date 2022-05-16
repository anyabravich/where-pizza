import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const TextMini = ({children}) => {
  return (
    <TextMiniBox>{children}</TextMiniBox>
  )
}

const TextMiniBox = styled.p`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: 129%;
  color: ${props => props.theme.colors.black};
`

export default TextMini