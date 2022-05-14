import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Row = ({children}) => {
  return (
    <RowBox>
      {children}
    </RowBox>
  )
}

const RowBox = styled.div`
  margin: ${rem(40)} 0;
`

export default Row