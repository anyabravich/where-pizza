import Button from 'components/Button'
import Card from 'components/Card'
import Container from 'components/Container'
import H2 from 'components/H2'
import Label from 'components/Label'
import Price from 'components/Price'
import Row from 'components/Row'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Head from 'next/head'
import React from 'react'

const Components = () => {
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
          <Card />
        </Row>
      </Container>
    </>
  )
}
export default Components