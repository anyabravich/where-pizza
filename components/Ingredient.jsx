import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Icons } from "styles/Icons";
import { TextMiniBox } from "./TextMini";

const Ingredient = ({ icon, title, constituents, disabled }) => {
  return (
    <IngredientBox constituents={constituents}>
      <IngredientIcon icon={icon} disabled={disabled} />
      <IngredientTitle disabled={disabled}>{title}</IngredientTitle>
    </IngredientBox>
  );
};

const IngredientBox = styled.button`
  cursor: pointer;
  width: ${rem(105)};
  pointer-events: ${(props) => (props.constituents ? "none" : "auto")};
`;

const IngredientIcon = styled.i`
  display: block;
  width: 100%;
  height: ${rem(105)};
  margin-bottom: ${rem(8)};
  border: ${rem(1)} solid ${(props) => props.theme.colors.line.grey};
  border-radius: ${(props) => rem(props.theme.radius.ingredient)};
  ${(props) =>
    props.disabled
      ? `background: url("${Icons(
          props.icon + "-disabled"
        )}") no-repeat center center`
      : `background: url("${Icons(props.icon)}") no-repeat center center`}
`;

const IngredientTitle = styled(TextMiniBox)`
  text-align: center;
  color: ${(props) =>
    props.disabled ? props.theme.colors.grey : props.theme.colors.black};
`;

export default Ingredient;
