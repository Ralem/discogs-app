import React from "react"; // make fragment shorthand works
import { Global } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = {
  body: {
    ...tw`antialiased`,
  },
};

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
