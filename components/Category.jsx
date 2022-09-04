import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Icons } from 'styles/Icons';

const Category = ({ icon, text, id, active, toggleTab, page, disabled }) => {
  return (
    <CategoryBox onClick={() => toggleTab(id)} page={page} disabled={disabled}>
      <CategoryIcon icon={active ? Icons(icon + '-active') : Icons(icon)} />
      <CategoryText active={active}>{text}</CategoryText>
    </CategoryBox>
  );
};

const CategoryBox = styled.button`
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  width: ${(props) => (props.page === 'components' ? rem(135) : '100%')};
  padding: ${rem(20)} ${rem(25)};
  color: ${(props) => (props.active ? props.theme.colors.red : props.theme.colors.black)};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => `${rem(props.theme.radius.category)}`};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.line.grey};
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${rem(8)} ${rem(10)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0 ${rem(8)};
  }
`;

const CategoryIcon = styled.i`
  display: block;
  flex-shrink: 0;
  width: ${rem(32)};
  height: ${rem(32)};
  margin: 0 auto;
  margin-bottom: ${rem(8)};
  // prettier-ignore
  background: url("${(props) => props.icon}") no-repeat center center;
  background-size: contain;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${rem(24)};
    height: ${rem(24)};
    margin: 0;
  }
`;

const CategoryText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.primary.default};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${rem(14)};
    text-align: left;
  }
`;

export default Category;
