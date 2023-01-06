import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const ButtonsPopup = ({ children, mb }) => {
  return <ButtonsPopupBox mb={mb}>{children}</ButtonsPopupBox>;
};

const ButtonsPopupBox = styled.div`
  display: flex;
  border: ${rem(1)} solid ${(props) => props.theme.colors.line.grey};
  border-radius: ${(props) => rem(props.theme.radius.button)};
  margin-bottom: ${(props) => rem(props.mb)};
`;

export default ButtonsPopup;
