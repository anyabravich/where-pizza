import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from './Container'
import City from './City'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderTop>
        <Container>
          <HeaderTopBox>
            <City />
          </HeaderTopBox>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        <Container>
          Header
        </Container>
      </HeaderBottom>
    </HeaderBox>
  )
}

const HeaderBox = styled.header`
  background: ${props => props.theme.colors.white};
`

const HeaderTop = styled.div`
  padding: ${rem(10)} 0;
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.line.grey};
`

const HeaderBottom = styled.div`
  padding: ${rem(16)} 0;
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.line.grey};
`

const HeaderTopBox = styled.div``

export default Header