import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const PriceContainer = ({children}) => {
  return (
    <PriceBox>{children}</PriceBox>
  )
}

const PriceBox = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    gap: 0 ${rem(12)};
    align-items: center;
  }
`

export default PriceContainer