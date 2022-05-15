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
  display: flex;
  align-items: flex-start;
  gap: 0 ${rem(20)};
`

export default Row