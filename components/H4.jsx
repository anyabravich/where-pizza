import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H4 = ({ children, mb = 0 }) => {
  return <H4Box mb={mb}>{children}</H4Box>;
};

export const H4Box = styled.h4`
  font-weight: 600;
  font-size: ${rem(20)};
  line-height: 140%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${(props) => rem(props.mb)};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${rem(14)};
    line-height: 129%;
  }
`;

export default H4;
