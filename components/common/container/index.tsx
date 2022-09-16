import * as React from "react";
import { LayoutContainer } from "./container.styled";

interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Container;
