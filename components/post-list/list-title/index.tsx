import * as React from "react";
import { CtTitle } from "./list-title.styled";

interface IListTitleProps {
  title?: string;
}

const ListTitle: React.FunctionComponent<IListTitleProps> = ({
  title,
}: IListTitleProps) => {
  return (
    <>
      <CtTitle>
        <h2> {title}</h2>
      </CtTitle>
    </>
  );
};

export default ListTitle;
