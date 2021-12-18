import * as React from 'react';
import styled from "styled-components";

interface ContainerProps {
    children: JSX.Element
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }: ContainerProps) => {
  return <LayoutContainer>
    {children}      
  </LayoutContainer>;
};

export default Container;

const LayoutContainer = styled.div`
  display: flex;  
  justify-content:center;
  margin: 0 auto;
`;