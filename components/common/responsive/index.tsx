import React from "react";
import { ResponsiveBlock } from "./responsive.styled";

const Responsive = ({ children, ...rest }: any) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
