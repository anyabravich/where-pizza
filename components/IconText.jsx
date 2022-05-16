import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import TextMini from './TextMini'

// TODO: сделать определение города пользователя
const IconText = ({icon, text}) => {
  return (
    <IconTextBox>
      <IconTextIcon icon={icon} />
      <TextMini>{text}</TextMini>
    </IconTextBox>
  )
}

const IconTextBox = styled.div`
  display: flex;
  align-items: center;
`

const IconTextIcon = styled.i`
  display: inline-block;
  width: ${rem(20)};
  height: ${rem(20)};
  margin-right: ${rem(8)};
  background: url("${props => props.icon}") no-repeat center center;
`

export default IconText