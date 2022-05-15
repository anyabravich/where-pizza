import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const H2 = ({children, mb = 0, align = 'left'}) => {
  return (
    <H2Box
      mb={mb}
      align={align}
    >
      {children}
    </H2Box>
  )
}

const H2Box = styled.h2`
  margin-bottom: ${props => props.mb};
  font-weight: 600;
  font-size: ${rem(40)};
  line-height: 120%;
  color: ${props => props.theme.colors.black};
  ${
    props => {
      if (props.align === 'center') {
        return `
          text-align: center;
        `
      }
    }
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${rem(32)};
    line-height: 114%;
  }
`

export default H2