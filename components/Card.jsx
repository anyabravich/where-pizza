import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'node_modules/next/image'
import Subtitle from './Subtitle'
import Text from './Text'
import Button from './Button'
import Label from './Label'
import Price from './Price'
import PriceContainer from './PriceContainer'

const Card = ({img, title, description, oldPrice, price, mw}) => {
  return (
    <CardBox mw={mw}>
      <Label>New</Label>
      <CardImg>
        <Image src={img} alt='img' layout='fill' priority={true} />
      </CardImg>
      <CardInfo>
        <Subtitle mb={12} mbSm={8}>
          {title}
        </Subtitle>
        <Text mb={16} mbSm={10}>
          {description}
        </Text>
        <CardControl>
          <Button mobile={false}>Выбрать</Button>
          <PriceContainer>
            <Price color='primary' type='old'>{oldPrice}</Price>
            <Price color='primary'>{price}</Price>
          </PriceContainer>
        </CardControl>
      </CardInfo>
    </CardBox>
  ) 
}

const CardBox = styled.article`
  position: relative;
  border: ${rem(1)} solid ${props => props.theme.colors.line.grey};
  border-radius: ${props => `${rem(props.theme.radius.card)}`};
  max-width: ${props => rem(props.mw)}; 
  overflow: hidden;
  background: ${props => props.theme.colors.white};
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    align-items: flex-start;
    gap: 0 ${rem(12)};
    max-width: 100%;
    padding: ${rem(12)}
  }
`

const CardImg = styled.div`
  width: ${rem(300)};
  height: ${rem(300)};
  margin: 0 auto;
  position: relative;
  @media ${props => props.theme.breakpoints.sm} {
    width: ${rem(100)};
    height: ${rem(100)};
    flex: 1 0 auto;
  }
`

const CardInfo = styled.div`
  padding: ${rem(20)};
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0;
  }
`

const CardControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Card