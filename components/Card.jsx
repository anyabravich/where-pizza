import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import ItemImg from 'public/images/item-1.webp'
import Image from 'node_modules/next/image'
import Subtitle from './Subtitle'
import Text from './Text'
import Button from './Button'
import Label from './Label'
import Price from './Price'
import {pxToPercent} from 'styles/Mixins'
import PriceContainer from './PriceContainer'

const Card = () => {
  return (
    <CardBox>
      <Label>New</Label>
      <CardImg>
        <Image src={ItemImg} alt='img' />
      </CardImg>
      <CardInfo>
        <Subtitle mb={12} mbSm={8}>
          Картофель фри
        </Subtitle>
        <Text mb={16} mbSm={10}>
          Картофель, масло растительное, декстроза, дифосфат натрия
        </Text>
        <CardControl>
          <Button mobile={false}>Выбрать</Button>
          <PriceContainer>
            <Price color='primary' type='old'>от 699 ₽</Price>
            <Price color='primary'>от 499 ₽</Price>
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
  max-width: ${rem(300)}; 
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
  @media ${props => props.theme.breakpoints.sm} {
    min-width: ${rem(100)};
    flex: 1 0 ${pxToPercent(100, 350)};
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