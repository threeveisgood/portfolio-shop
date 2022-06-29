import * as React from "react";
import styled from "styled-components";

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

const CtTitle = styled.div`
  padding: 4rem 3rem 2rem;
`;
