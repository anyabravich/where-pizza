import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Ingredient from './Ingredient'

const Ingredients = () => {
  return (
    <IngredientsBox>
      <Ingredient icon={'cheese'} title={'Моцарелла'} constituents />
      <Ingredient icon={'pickled-cucumbers'} title={'Огурцы маринованные'} constituents disabled />
    </IngredientsBox>
  )
}

const IngredientsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(20)};
`

export default Ingredients