import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { SubtitleBox } from "./Subtitle";

const SubtitleTwo = ({ children, mb }) => {
  return <SubtitleTwoBox mb={mb}>{children}</SubtitleTwoBox>;
};

const SubtitleTwoBox = styled(SubtitleBox)`
  font-size: ${rem(16)};
  line-height: 125%;
`;

export default SubtitleTwo;
