import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Logo from "./Logo";
import { TextBox } from "./Text";
import H4 from "./H4";
import Link from "next/link";
import IconText from "./IconText";
import { Icons } from "styles/Icons";
import { pxToPercent } from "styles/Mixins";

// TODO: все данные брать из json дубликатов не должно быть
const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterRow>
          <FooterCol mr={pxToPercent(101, 1290)}>
            <Logo w={176} />
          </FooterCol>
          <FooterCol mr={pxToPercent(131, 1290)}>
            <H4 mb={22}>Куда пицца</H4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="/">О компании</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">Пользовательское соглашение</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">Условия гарантии</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterCol>
          <FooterCol mr={pxToPercent(132, 1290)}>
            <H4 mb={22}>Помощь</H4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="/">Ресторан</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">Контакты</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">Поддержка</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">Отследить заказ</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterCol>
          <FooterCol>
            <H4 mb={22}>Контакты</H4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="tel:79262231011">
                  <IconText icon={Icons("tel")} text="+7 (926) 223-10-11" />
                </FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">
                  <IconText
                    icon={Icons("location")}
                    text="Москва, ул. Юных Ленинцев, д.99"
                  />
                </FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="/">
                  <IconText icon={Icons("facebook")} text="Facebook" />
                </FooterLink>
                <FooterLink href="/">
                  <IconText icon={Icons("instagram")} text="Instagram" />
                </FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterCol>
          <FooterCopyright>© Copyright 2021 — Куда Пицца</FooterCopyright>
        </FooterRow>
      </Container>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
  margin-top: auto;
  padding: ${rem(32)} 0;
  background: ${(props) => props.theme.colors.white};
`;

const FooterRow = styled.div`
  position: relative;
  display: grid;
  gap: 0 ${rem(20)};
  grid-template-columns: repeat(4, 1fr);
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${rem(24)} 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: ${rem(24)} 0;
  }
`;

const FooterCol = styled.div`
  margin-right: ${(props) => props.mr};
  @media ${(props) => props.theme.breakpoints.lg} {
    &:nth-child(3) {
      margin-top: ${rem(-120)};
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    &:nth-child(3) {
      margin-top: auto;
    }
  }
`;

const FooterUl = styled.ul``;

const FooterLi = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(20)} ${rem(24)};
  margin-bottom: ${rem(20)};
  @media ${(props) => props.theme.breakpoints.lg} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FooterLink = styled(Link)`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 138%;
  color: ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${rem(12)};
    line-height: 133%;
  }
`;

const FooterCopyright = styled(TextBox)`
  position: absolute;
  left: 0;
  bottom: 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    position: static;
  }
`;

export default Footer;
