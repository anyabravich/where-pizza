import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from './Container'
import TextMini from './TextMini'
import TextMiniBold from './TextMiniBold'
import IconText from './IconText'
import { Icons } from 'styles/Icons'
import Logo from './Logo'
import ButtonBasket from './ButtonBasket'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderTop>
        <Container>
          <HeaderTopBox>
            <HeaderTopLeft>
              <IconText icon={Icons('location')} text='Москва' />
              <TextMini dXlNone={true}>Проверить адрес</TextMini>
              <TextMini>Среднее время доставки*: <TextMiniBold pl={4}>00:24:19</TextMiniBold></TextMini>
            </HeaderTopLeft>
            <HeaderTopRight dSmNone={true}>
              <TextMini dLgNone={true}>Время работы: с 11:00 до 23:00</TextMini>
              <IconText icon={Icons('account')}  text='Войти в аккаунт' />
            </HeaderTopRight>
          </HeaderTopBox>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        <Container>
          <HeaderBottomBox>
            <Logo w={141} />
            <ButtonBasket />
          </HeaderBottomBox>
        </Container>
      </HeaderBottom>
    </HeaderBox>
  )
}

const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
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
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: space-between;
  }
`

const HeaderTopRight = styled(HeaderTopLeft)`
  @media ${props => props.theme.breakpoints.sm} {
    display: ${props => props.dSmNone ? 'none' : null};
  }
`

const HeaderBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header