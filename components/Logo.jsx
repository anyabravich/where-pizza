import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Icons } from 'styles/Icons'
import Link from 'next/link'

const Logo = ({w}) => {
  return (
    <Link href='/' passHref>
      <LogoBox w={w}>Logo</LogoBox>
    </Link>
  )
}

const LogoBox = styled.a`
  display: block;
  width: ${props => `${rem(props.w)}`};
  height: ${rem(32)};
  background: url("${Icons('logo')}") no-repeat 0 0;
  background-size: contain;
  font-size: 0;
`

export default Logo