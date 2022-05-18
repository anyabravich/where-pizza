import Container from 'components/Container'
import H2 from 'components/H2'
import Row from 'components/Row'
import Head from 'next/head'
import styled from 'styled-components'
import { rem } from 'polished'

export default function Home() {
  return (
    <>
      <Head>
        <title>Where Pizza</title>
      </Head>
      <HomeBox>
        <Container>
          <H2 mb={32}>Пицца</H2>
        </Container>
      </HomeBox>
    </>
  )
}

const HomeBox = styled.div`
  padding: ${rem(30)} 0 ${rem(60)};
`
