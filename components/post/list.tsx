import Card from "components/post/card";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Pagination from "components/pagination";

interface ListProps {
  result: any;
  count: number;
  paginate: any;
  currentPage: number;
}

function List({
  result,
  count,
  paginate,
  currentPage,
}: ListProps): ReactElement {
  console.log(result);
  return (
    <MainContainer>
      <CardUl>
        {result.map((data: any) => {
          return (
            <Card
              title={data.title}
              imageLinks={data.imageLinks}
              price={data.price}
              shipping={data.shipping}
              store={data.store}
              username={data.username}
            />
          );
        })}
      </CardUl>
      <div>
        <Pagination
          totalPosts={count}
          paginate={paginate}
          currentPage={currentPage}
          pathName={``}
        />
      </div>
    </MainContainer>
  );
}

export default List;

const MainContainer = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: ${(props) => props.theme.gap.card};

  justify-content: center;
`;

