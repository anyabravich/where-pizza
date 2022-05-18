import Container from 'components/Container'
import H2 from 'components/H2'
import Row from 'components/Row'
import Head from 'next/head'
import styled from 'styled-components'
import { rem } from 'polished'
import Cards from 'components/Cards'
import Category from 'components/Category'
import { Icons } from 'styles/Icons'
import { useState } from 'react'

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Head>
        <title>Where Pizza</title>
      </Head>
      <HomeBox>
        <Container>
          <Row>
            <Category icon={Icons(!isActive ? 'fire-active' : 'fire')} text='Акции' active={!isActive} onClick={() => setIsActive(!isActive)} />
            <Category icon={Icons(isActive ? 'pizza-active' : 'pizza')} text='Пицца' active={isActive} onClick={() => setIsActive(!isActive)} />
          </Row>
          <H2 mb={32}>Пицца</H2>
          <Cards />
        </Container>
      </HomeBox>
    </>
  )
}

const HomeBox = styled.div`
  padding: ${rem(30)} 0 ${rem(60)};
`
