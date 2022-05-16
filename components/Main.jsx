import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Main = ({children}) => {
  return (
    <MainBox>{children}</MainBox>
  )
}

const MainBox = styled.main`
  
`

export default Main