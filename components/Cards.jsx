import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Card from './Card';

const Cards = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('db/products.json')
      .then(response => response.json())
      .then(json => setProducts(json['products']))
  }, []);

  return (
    <CardsBox>
      {
        products.map(({img, title, description, oldPrice, price}, index) => (
          <Card 
            img={img} 
            title={title} 
            description={description} 
            oldPrice={oldPrice}
            price={price}
            key={index}
          />
        ))
      }
    </CardsBox>
  )
}

export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(30)};
  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }
`

export default Cards