import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import TextMini from "./TextMini";

// TODO: сделать определение города пользователя
// TODO: скорей всего придется заменить span на а
const IconText = ({ icon, text, dSmNone = false }) => {
  return (
    <IconTextBox dSmNone={dSmNone}>
      <IconTextIcon icon={icon} />
      <TextMini>{text}</TextMini>
    </IconTextBox>
  );
};

const IconTextBox = styled.span`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.dSmNone ? "none" : null)};
  }
`;

const IconTextIcon = styled.i`
  display: inline-block;
  width: ${rem(20)};
  height: ${rem(20)};
  margin-right: ${rem(8)};
  background: url("${(props) => props.icon}") no-repeat center center;
  flex: 1 0 auto;
`;

export default IconText;
