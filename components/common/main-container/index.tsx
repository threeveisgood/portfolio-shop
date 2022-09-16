import * as React from "react";
import { LayoutContainer } from "./main-container.styled";

interface MainContainerProps {
  children: JSX.Element;
}

const MainContainer: React.FunctionComponent<MainContainerProps> = ({
  children,
}: MainContainerProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default MainContainer;
