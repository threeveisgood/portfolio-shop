import * as React from "react";
import styled from "styled-components";

interface MainContainerProps {
  children: JSX.Element;
}

const MainContainer: React.FunctionComponent<MainContainerProps> = ({
  children,
}: MainContainerProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default MainContainer;

const LayoutContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;
