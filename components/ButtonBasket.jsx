import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Icons } from 'styles/Icons'

// TODO: сделать для мобильного кнопку раскрытия меню
const ButtonBasket = () => {
  return (
    <ButtonBasketBox>
      <ButtonBasketIcon />
      <ButtonBasketCount>0 ₽</ButtonBasketCount>
    </ButtonBasketBox>
  )
}

const ButtonBasketBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 ${rem(8)};
  padding: ${rem(8)} ${rem(16)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary.default};
  border-radius: ${props => rem(props.theme.radius.basket)};
  cursor: pointer;
`

const ButtonBasketIcon = styled.i`
  display: inline-block;
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("${Icons('basket')}") no-repeat center center;
`

const ButtonBasketCount = styled.span`
  font-weight: 400;
  font-size: ${rem(16)};
  font-family: 'SF Pro Text';
`

export default ButtonBasket