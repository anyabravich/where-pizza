import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Button = ({children, view = 'full'}) => {
  return (
    <ButtonBox
      view={view}
    >
      {children}
    </ButtonBox>
  )
}

const ButtonBox = styled.button`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  text-align: center;
  padding: ${rem(13)} ${rem(40)};
  border-radius: ${props => `${rem(props.theme.radius.button)}`};
  font-size: ${rem(16)};
  line-height: 138%;
  font-weight: 400;
  // TODO: подключить шрифт
  font-family: 'SF Pro Text';
  cursor: pointer;
  // TODO: добавить hover, active
` 

export default Button