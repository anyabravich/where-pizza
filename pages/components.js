import Button from 'components/Button'
import Container from 'components/Container'
import H2 from 'components/H2'
import Label from 'components/Label'
import Row from 'components/Row'
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
          <Label>New</Label>
          <Label size='big'>New</Label>
        </Row>
        <Row>
          <Button>Выбрать</Button>
        </Row>
      </Container>
    </>
  )
}
export default Components