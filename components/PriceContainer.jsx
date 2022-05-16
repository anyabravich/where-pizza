import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const PriceContainer = ({children}) => {
  return (
    <PriceBox>{children}</PriceBox>
  )
}

const PriceBox = styled.div`
  /* text-align: right; */
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
  }
`

export default PriceContainer