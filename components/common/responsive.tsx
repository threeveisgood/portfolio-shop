import React from "react";
import styled from "styled-components";

const Responsive = ({ children, ...rest }: any) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;

const ResponsiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 102.4rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 76.8rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
