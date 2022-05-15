import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: '#191919',
    white: '#ffffff',
    red: '#e23535',
    primary: '#FF7010'
  },
  breakpoints: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
  },
  radius: {
    label: 10,
    button: 6,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme