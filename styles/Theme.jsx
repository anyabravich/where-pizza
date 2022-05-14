import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: 'red',
  },
  breakpoints: {
    md: '(max-width: 768px)',
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme