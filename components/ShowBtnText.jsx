import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const ShowBtnText = ({isShow, setIsShow}) => {
  return (
    <ShowBtnTextBox isShow={isShow} onClick={() => setIsShow(!isShow)}>
      {isShow ? 'Скрыть' : 'Показать'}
    </ShowBtnTextBox>
  )
}

const ShowBtnTextBox = styled.button`
  font-weight: 600;
  font-size: ${rem(16)};
  line-height: 125%;
  color: ${props => props.theme.colors.primary.default};
  cursor: pointer;
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${rem(14)};
    line-height: 143%;
  }
`

export default ShowBtnText