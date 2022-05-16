import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: '#191919',
    white: '#ffffff',
    red: '#e23535',
    grey: '#a5a5a5',
    primary: {
      default: '#FF7010',
      light: '#FFEEE2'
    },
    line: {
      grey: '#F0F0F0'
    }
  },
  breakpoints: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
  },
  radius: {
    label: 10,
    button: 6,
    price: 6,
    card: 12,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme