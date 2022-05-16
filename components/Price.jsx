import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { SubtitleBox } from './Subtitle'

const Price = ({children, mb = 0, mbSm = 0, color = 'transparent', type = 'default'}) => {
  return (
    <PriceBox
      color={color}
      type={type}
      mb={mb}
      mbSm={mbSm}
    >
      {children}
    </PriceBox>
  )
}

const PriceBox = styled(SubtitleBox)`
  ${
    props => {
      if (props.type === 'old') {
        return `
          color: ${props.theme.colors.grey};
          font-size: ${rem(14)};
          text-decoration: line-through;
          font-weight: 400;
        `
      } else {
        return `
          color: ${props.theme.colors.primary};
        `
      }
    }
  }
  @media ${props => props.theme.breakpoints.sm} {
    /* TODO: переписать в вид условия */
    background: ${props => props.type === 'old' ? 'transparent' : props.theme.colors.primary.light};
    /* TODO: убрать для старой цены */
    /* TODO: указать order */
    padding: ${rem(7)} ${rem(16)};
    border-radius: ${rem(6)};
    text-align: center;
    ${
    props => {
      if (props.type === 'old') {
        return `
          padding: 0;
          order: 1;
        `
      } else {
        return `
          
        `
      }
    }
  }
  }
`

export default Price