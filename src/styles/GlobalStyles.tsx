import React from "react"; // make fragment shorthand works
import { Global } from "@emotion/react";
import tw, { css, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
