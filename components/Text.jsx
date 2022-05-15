import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// TODO: для карточки ввести переменную ограничения на кол. строк
const Text = ({children, mb}) => {
  return (
    <TextBox mb={mb}>{children}</TextBox>
  )
}

const TextBox = styled.p`
  font-family: 'SF Pro Text';
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 138%;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => `${props.mb}px`};
`

export default Text