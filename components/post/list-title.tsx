import * as React from "react";
import styled from "styled-components";

interface IListTitleProps {}

const ListTitle: React.FunctionComponent<IListTitleProps> = (props) => {
  return (
    <>
      <CtTitle>
        <h2>최신 핫딜</h2>
      </CtTitle>
    </>
  );
};

export default ListTitle;

const CtTitle = styled.div`
  padding: 4rem 3rem 2rem;
`;
