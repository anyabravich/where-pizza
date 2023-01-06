import Container from "components/Container";
import H2 from "components/H2";
import Head from "next/head";
import styled from "styled-components";
import { rem } from "polished";
import Cards from "components/Cards";
import Category from "components/Category";
import Categories from "components/Categories";
import DeliveryInfo from "components/DeliveryInfo";
import Popup from "components/Popup";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardsAndTitle from "components/CardsAndTitle";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const toggleTab = (index) => setIsActive(index);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setCategories(json["categories"]));

    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setProducts(json["products"]));
  }, []);

  return (
    <>
      <Head>
        <title>Where Pizza</title>
      </Head>
      <HomeBox>
        <Container>
          <Categories>
            <Swiper
              slidesPerView={2.9}
              spaceBetween={12}
              slidesPerGroup={1}
              loop={true}
              className="mySwiper"
              breakpoints={{
                475: {
                  slidesPerView: 3.7,
                  spaceBetween: 20,
                },
                896: {
                  slidesPerView: 5.2,
                  spaceBetween: 20,
                },
                998: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
                1140: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
                1284: {
                  slidesPerView: 8,
                  spaceBetween: 30,
                },
              }}
            >
              {categories.map(({ icon, text, id }) => (
                <SwiperSlide key={id}>
                  <Category
                    icon={icon}
                    text={text}
                    id={id}
                    active={isActive === id ? true : false}
                    toggleTab={toggleTab}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Categories>
          {products.map((item, index) => {
            return (
              <CardsAndTitle
                title={item.name}
                product={item.product}
                key={index}
              />
            );
          })}
          <DeliveryInfo title="Доставка пиццы в Москве" />
        </Container>
        {/* <Popup /> */}
      </HomeBox>
    </>
  );
}

const HomeBox = styled.div`
  padding: ${rem(30)} 0 ${rem(60)};
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${rem(20)} 0 ${rem(32)};
  }
`;
