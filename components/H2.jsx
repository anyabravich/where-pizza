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

const H2Box = styled.h1`
  margin-bottom: ${props => props.mb};
  font-weight: 600;
  font-size: ${rem(40)};
  line-height: 120%;
  ${
    props => {
      if (props.align === 'center') {
        return `
          text-align: center;
        `
      }
    }
  }
`

export default H2