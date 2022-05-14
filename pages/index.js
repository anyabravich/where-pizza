import Container from 'components/Container'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Where Pizza</title>
      </Head>
      <Container>
        <h1>Where Pizza</h1>
        <Link href="/components">
          <a>Components</a>
        </Link>
      </Container>
    </>
  )
}
