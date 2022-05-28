import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Categories = ({children}) => {
  return (
    <CategoriesBox>{children}</CategoriesBox>
  )
}

const CategoriesBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(30)};
  margin-bottom: ${rem(30)};
  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: ${rem(20)};
  }
`

export default Categories