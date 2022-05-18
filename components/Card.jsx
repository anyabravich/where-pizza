import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import ItemImg from 'public/images/item-1.webp'
import Image from 'node_modules/next/image'
import Subtitle from './Subtitle'
import Text from './Text'
import Button from './Button'
import Label from './Label'
import Price from './Price'
import PriceContainer from './PriceContainer'

const Card = ({img, title, description, oldPrice, price}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('db/products.json')
      .then(response => response.json())
      .then(json => setProducts(json['products']))
  }, []);

  console.log(products);

  return (
    <CardBox>
      <Label>New</Label>
      <CardImg>
        <Image src='/images/item-1.webp' alt='img' layout='fill' priority={true} />
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
  width: ${rem(300)};
  height: ${rem(300)};
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