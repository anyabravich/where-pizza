import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Label = ({ children, size = "small", page }) => {
  return (
    <LabelBox size={size} page={page}>
      {children}
    </LabelBox>
  );
};

const LabelBox = styled.div`
  display: inline-flex;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red};
  border-radius: ${(props) =>
    `0 ${rem(props.theme.radius.label)} ${rem(props.theme.radius.label)} 0`};
  cursor: default;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  ${(props) => {
    if (props.size === "small") {
      return `
          padding: ${rem(7)} ${rem(16)};
          font-size: ${rem(14)};
          line-height: 129%;
        `;
    } else {
      return `
          padding: ${rem(8)} ${rem(20)};
          font-size: ${rem(18)};
          line-height: 133%;
        `;
    }
  }}
  ${(props) => {
    if (props.page !== "components") {
      return `
            position: absolute;
            top: ${rem(20)};
            left: 0;
            z-index: 1;
          `;
    }
  }}
  @media ${(props) => props.theme.breakpoints.sm} {
    ${(props) => {
      if (props.size === "small") {
        return `
            padding: ${rem(4)} ${rem(8)};
            font-size: ${rem(12)};
            line-height: 117%;
            top: ${rem(8)};
          `;
      } else {
        return `
            padding: ${rem(7)} ${rem(16)};
            font-size: ${rem(16)};
            line-height: 112%;
          `;
      }
    }}
  }
`;

export default Label;
