import React from 'react'
import { ButtonBox } from './Button'
import { TextBox } from './Text'
import styled from 'styled-components'
import { rem } from 'polished'

const ButtonsPopupButton = ({text, active}) => {
  return (
    <ButtonsPopupButtonBox active={active}>
      <ButtonsPopupButtonText active={active}>{text}</ButtonsPopupButtonText>
    </ButtonsPopupButtonBox>
  )
}

const ButtonsPopupButtonBox = styled(ButtonBox)`
  width: 100%;
  border-radius: 0;
  height: ${rem(46)};
  ${
    props => {
      if (props.active) {
        return `
          position: relative;
          border-radius: ${rem(props.theme.radius.button)};
          top: ${rem(-1)};
          left: ${rem(-1)};
          &::before {
            content: '';
            width: 100%;
            height: calc(100% + ${rem(2)});
            background: ${props.theme.colors.primary.default};
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: ${rem(props.theme.radius.button)};
          }
        `
      } else {
        return `
          background: transparent;
        `
      }
    }
  }
`

const ButtonsPopupButtonText = styled(TextBox)`
  position: relative;
  z-index: 1;
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.black};
`

export default ButtonsPopupButton