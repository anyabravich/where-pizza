import Button from 'components/Button'
import Card from 'components/Card'
import Category from 'components/Category'
import Container from 'components/Container'
import H2 from 'components/H2'
import H3 from 'components/H3'
import H4 from 'components/H4'
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
          <H3>H3</H3>
        </Row>
        <Row>
          <H4>H4</H4>
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
          <Category page={'components'} icon={'fire'} text={'Акции'} id={1} active={isActive === 1 ? true : false} disabled />
          <Category page={'components'} icon={'fire-active'} text={'Акции'} id={1} active={isActive === 1 ? true : false} disabled />
        </Row>
        <Row>
          <Card
            mw={300}
            img='/images/potato-1.webp' 
            title='Картофель фри' 
            description='Картофель, масло растительное, декстроза, дифосфат натрия'
            oldPrice='от 699 ₽'
            price='от 499 ₽'
          />
        </Row>
      </Container>
    </>
  )
}
export default Components