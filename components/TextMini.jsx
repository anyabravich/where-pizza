import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const TextMini = ({children, dSmNone = false, dXlNone = false, dLgNone = false}) => {
  return (
    <TextMiniBox
      dSmNone={dSmNone}
      dLgNone={dLgNone}
      dXlNone={dXlNone}
    >
      {children}
    </TextMiniBox>
  )
}

export const TextMiniBox = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: 129%;
  color: ${props => props.theme.colors.black};
  @media ${props => props.theme.breakpoints.sm} {
    display: ${props => props.dSmNone ? 'none' : null};
  }
  @media ${props => props.theme.breakpoints.lg} {
    display: ${props => props.dLgNone ? 'none' : null};
  }
  @media ${props => props.theme.breakpoints.xl} {
    display: ${props => props.dXlNone ? 'none' : null};
  }
`

export default TextMini