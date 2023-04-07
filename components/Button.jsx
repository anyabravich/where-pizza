import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Button = ({ children, view = "full", mobile = true }) => {
  return (
    <ButtonBox view={view} mobile={mobile}>
      {children}
    </ButtonBox>
  );
};

export const ButtonBox = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary.default};
  text-align: center;
  padding: ${rem(13)} ${rem(40)};
  border-radius: ${(props) => `${rem(props.theme.radius.button)}`};
  font-size: ${rem(16)};
  line-height: 138%;
  font-weight: 400;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }
`;

export default Button;
