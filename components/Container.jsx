import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Container = ({children}) => {
  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}

const ContainerBox = styled.div`
  max-width: ${rem(1290)};
  /* border: 1px solid red; */
  margin: 0 auto;
  padding: 0 ${rem(80)};
  box-sizing: content-box;
  @media ${props => props.theme.breakpoints.md} {
    padding: 0 ${rem(20)};
  }
`

export default Container