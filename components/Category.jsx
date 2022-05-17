import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// TODO: решить как красить картинку, активной категории
// TODO: написать логику выбора
const Category = ({icon, text, active = false}) => {
  return (
    <CategoryBox active={active}> 
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
`

const CategoryIcon = styled.i`
  display: block;
  width: ${rem(32)};
  height: ${rem(32)};
  margin: 0 auto;
  margin-bottom: ${rem(8)};
  background: url("${props => props.icon}") no-repeat center center;
`

const CategoryText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  text-align: center;
`

export default Category