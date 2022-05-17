import Button from 'components/Button'
import Card from 'components/Card'
import Category from 'components/Category'
import Container from 'components/Container'
import H2 from 'components/H2'
import Label from 'components/Label'
import Price from 'components/Price'
import Row from 'components/Row'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Head from 'next/head'
import React, { useState } from 'react'
import { Icons } from 'styles/Icons'

const Components = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>Components</title>
      </Head>
      <Container>
        <Row>
          <H2>H2</H2>
        </Row>
        <Row>
          <Subtitle>Subtitle</Subtitle>
        </Row>
        <Row>
          <Text>Text</Text>
        </Row>
        <Row>
          <Price color='primary'>от 499 ₽</Price>
        </Row>
        <Row>
          <Label page='components'>New</Label>
          <Label size='big' page='components'>New</Label>
        </Row>
        <Row>
          <Button>Выбрать</Button>
        </Row> 
        <Row>
          {/* 
            TODO: надо писать нормальную функцию, а не инверсию состояния
            Логика табов
            https://qna.habr.com/q/647080
          */}
          <Category icon={Icons(!isActive ? 'fire-active' : 'fire')} text='Акции' active={!isActive} onClick={() => setIsActive(!isActive)} />
          <Category icon={Icons(isActive ? 'pizza-active' : 'pizza')} text='Пицца' active={isActive} onClick={() => setIsActive(!isActive)} />
        </Row>
        <Row>
          <Card />
        </Row>
      </Container>
    </>
  )
}
export default Components