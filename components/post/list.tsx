import Card from "components/styled/card";
import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Pagination from 'components/pagination';

export const postsPerPage = 3;

function List(): ReactElement {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1)  

  useEffect(() => {
    if (router && router.query) {
      setCurrentPage(parseInt(String(router.query.page || "1")));
    }
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <CardUl>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardUl>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={count}
          paginate={paginate}
          currentPage={currentPage}
          pathName={``}
        />
      </div>
    </MainContainer>
  );
}

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

export default List;
