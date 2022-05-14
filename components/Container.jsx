import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Container = () => {
  return (
    <ContainerBox>Container</ContainerBox>
  )
}

const ContainerBox = styled.div`
  min-width: ${rem(200)};
  display: inline-block;
  background: green;
  font-size: ${rem(50)};
`

export default Container