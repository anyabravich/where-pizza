import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import H3 from "./H3";
import { TextBox } from "./Text";
import ShowBtnText from "./ShowBtnText";

const DeliveryInfo = ({ title }) => {
  const [isShow, setIsShow] = useState(false);
  const [height, setHeight] = useState(0);
  const heightInfoDescription = createRef();

  useEffect(() => {
    setHeight(
      Math.round(heightInfoDescription.current.getBoundingClientRect().height)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DeliveryInfoBox>
      <H3 mb={16} mbSm={12}>
        {title}
      </H3>
      <DeliveryInfoDescriptionBox isShow={isShow} height={height}>
        <DeliveryInfoDescriptionContent ref={heightInfoDescription}>
          <DeliveryInfoDescription>
            Захотелось чего-то вкусного и&nbsp;сытного? Желание простое
            и&nbsp;понятное, только в&nbsp;холодильнике все не&nbsp;то,
            и&nbsp;до&nbsp;магазина идти лень. Все пропало? Нет. Недорого
            заказать пиццу в&nbsp;Москве очень просто! Вам на&nbsp;помощь спешит
            супергерой&nbsp;&mdash; Domino&rsquo;s Pizza! Как у&nbsp;всякого
            супергероя, у&nbsp;Domino&rsquo;s Pizza есть свои суперсилы:
            восхитительный вкус продукции из&nbsp;отборных ингредиентов; широкий
            ассортимент, включающий легендарные, фирменные и&nbsp;классические
            виды, для вегетарианцев и&nbsp;любителей экспериментировать; быстрая
            и&nbsp;бесплатная доставка пиццы в&nbsp;течение 30&nbsp;минут, чтобы
            вкусное и&nbsp;ароматное блюдо не&nbsp;успевало остыть.
          </DeliveryInfoDescription>
          <DeliveryInfoDescription>
            Как сделать заказ Доставка пиццы от&nbsp;Domino&rsquo;s&nbsp;&mdash;
            это когда Вам не&nbsp;нужно никуда ехать или звонить, ведь есть
            Интернет. Никогда еще заказ пиццы на&nbsp;дом в&nbsp;Москве
            не&nbsp;был таким простым! Чтобы заказать пиццу онлайн, Вам
            необходимо: выбрать понравившийся вариант и&nbsp;количество порций;
            положить желаемое в&nbsp;&laquo;Корзину&raquo;; не&nbsp;уходить
            далеко, так как вкусная пицца на&nbsp;заказ с&nbsp;доставкой уже
            мчится к&nbsp;Вам из&nbsp;ближайшей пиццерии Domino&rsquo;s.
            И&nbsp;не&nbsp;забудьте оплатить заказ курьеру!
          </DeliveryInfoDescription>
        </DeliveryInfoDescriptionContent>
      </DeliveryInfoDescriptionBox>
      <ShowBtnText isShow={isShow} setIsShow={setIsShow} />
    </DeliveryInfoBox>
  );
};

const DeliveryInfoBox = styled.article`
  max-width: ${rem(850)};
  width: 100%;
  margin: 0 auto;
`;

const DeliveryInfoDescriptionBox = styled.div`
  position: relative;
  height: ${(props) => (props.isShow ? rem(props.height) : rem(200))};
  overflow: hidden;
  margin-bottom: ${rem(16)};
  transition: height 300ms ease-in-out;
  &::before {
    display: ${(props) => (props.isShow ? "none" : "block")};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0) 10%, #f9f9f9 100%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${(props) => (props.isShow ? rem(props.height) : rem(100))};
    margin-bottom: ${rem(12)};
    &::before {
      display: ${(props) => (props.isShow ? "none" : "block")};
      background: linear-gradient(rgba(255, 255, 255, 0) 15%, #f9f9f9 90%);
    }
  }
`;

const DeliveryInfoDescriptionContent = styled.div``;

const DeliveryInfoDescription = styled(TextBox)`
  margin-bottom: ${rem(15)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export default DeliveryInfo;
