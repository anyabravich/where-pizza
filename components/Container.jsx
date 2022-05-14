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
  border: 1px solid red;
  margin: 0 auto;
`

export default Container