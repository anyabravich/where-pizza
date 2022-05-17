import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// TODO: для карточки ввести переменную ограничения на кол. строк
const Text = ({children, mb = 0, mbSm = 0}) => {
  return (
    <TextBox
      mb={mb}
      mbSm={mbSm}
    >
      {children}
    </TextBox>
  )
}

export const TextBox = styled.p`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 138%;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => `${props.mb}px`};
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${rem(12)};
    line-height: 133%;
    margin-bottom: ${props => `${props.mbSm}px`};
  }
`

export default Text