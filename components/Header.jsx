import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from './Container'
import TextMini from './TextMini'
import TextMiniBold from './TextMiniBold'
import IconText from './IconText'
import { Icons } from 'styles/Icons'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderTop>
        <Container>
          <HeaderTopBox>
            <HeaderTopLeft>
              <IconText icon={Icons('location')} text='Москва' />
              <TextMini>Проверить адрес</TextMini>
              <TextMini>Среднее время доставки*: <TextMiniBold>00:24:19</TextMiniBold></TextMini>
            </HeaderTopLeft>
            <HeaderTopRight>
              <TextMini>Время работы: с 11:00 до 23:00</TextMini>
              <IconText icon={Icons('account')}  text='Войти в аккаунт' />
            </HeaderTopRight>
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

const HeaderTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderTopLeft = styled.div`
  display: flex;
  gap: 0 ${rem(40)};
`

const HeaderTopRight = styled(HeaderTopLeft)``

export default Header