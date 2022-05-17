import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// TODO: написать логику выбора
const Category = ({icon, text, active, onClick}) => {
  return (
    <CategoryBox active={active} onClick={onClick}> 
      <CategoryIcon icon={icon} />
      <CategoryText>{text}</CategoryText>
    </CategoryBox>
  )
}

const CategoryBox = styled.button`
  padding: ${rem(20)} ${rem(40)};
  color: ${props => props.active ? props.theme.colors.red : props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => `${rem(props.theme.radius.category)}`};
  cursor: pointer;
  @media ${props => props.theme.breakpoints.sm} {
    padding: ${rem(8)} ${rem(15)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 ${rem(8)};
  }
`

const CategoryIcon = styled.i`
  display: block;
  width: ${rem(32)};
  height: ${rem(32)};
  margin: 0 auto;
  margin-bottom: ${rem(8)};
  background: url("${props => props.icon}") no-repeat center center;
  background-size: contain;
  @media ${props => props.theme.breakpoints.sm} {
    width: ${rem(24)};
    height: ${rem(24)};
    margin-bottom: 0;
  }
`

const CategoryText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  text-align: center;
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${rem(14)};
  }
`

export default Category