import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Icons } from 'styles/Icons'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' passHref>
      <LogoBox>Logo</LogoBox>
    </Link>
  )
}

const LogoBox = styled.a`
  display: block;
  width: ${rem(141)};
  height: ${rem(32)};
  background: url("${Icons('logo')}") no-repeat center center;
  background-size: contain;
  font-size: 0;
`

export default Logo