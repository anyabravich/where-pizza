import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import ItemImg from 'public/images/item-1.webp'
import Image from 'node_modules/next/image'
import Subtitle from './Subtitle'
import Text from './Text'
import Button from './Button'
import Label from './Label'

const Card = () => {
  return (
    <CardBox>
      <Label>New</Label>
      <CardImg>
        <Image src={ItemImg} alt='img' />
      </CardImg>
      <CardInfo>
        <Subtitle mb={12}>
          Картофель фри
        </Subtitle>
        <Text mb={16}>
          Картофель, масло растительное, декстроза, дифосфат натрия
        </Text>
        <CardControl>
          <Button>Выбрать</Button>
          {/* TODO: сделать отдельный компонент price */}
          <Subtitle color='primary'>475 ₽</Subtitle>
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
`

const CardImg = styled.div`

`

const CardInfo = styled.div`
  padding: ${rem(20)};
`

const CardControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Card