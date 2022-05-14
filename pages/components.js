import Container from 'components/Container'
import H2 from 'components/H2'
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
      </Container>
    </>
  )
}
export default Components