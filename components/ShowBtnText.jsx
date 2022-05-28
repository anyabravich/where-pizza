import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import ShowHideText from 'tools/context'

const ShowBtnText = () => {
  const [isShow, setIsShow] = useState(false);
  function handleClicked() {
    setIsShow(!isShow);
    console.log(isShow)
  }
  return (
    <ShowBtnTextBox isShow={isShow} onClick={() => console.log(handleClicked())}>Показать полностью</ShowBtnTextBox>
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