import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Subtitle = ({ children, mb = 0, mbSm = 0, color = 'transparent' }) => {
  return (
    <SubtitleBox mb={mb} mbSm={mbSm} color={color}>
      {children}
    </SubtitleBox>
  );
};

export const SubtitleBox = styled.p`
  background: transparent;
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${(props) => (props.color === 'primary' ? props.theme.colors.primary.default : props.theme.colors.black)};
  margin-bottom: ${(props) => `${props.mb}px`};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${rem(14)};
    line-height: 129%;
    margin-bottom: ${(props) => `${props.mbSm}px`};
  }
`;

export default Subtitle;
