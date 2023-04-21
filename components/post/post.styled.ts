import styled from "styled-components";

export const ContentsContianer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 5rem;
`;

export const ContentsLayout = styled.div`
  border-radius: 0.4rem;
  margin: 1rem 0 0;
  border-top: 6px solid ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 2.5rem 4rem 0px;
  overflow: hidden;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    padding: 2.5rem 2rem 0px;
  }
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
`;

export const DetailContainer = styled.div`
  padding: 2rem 4rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    padding: 2rem 2rem;
  }
`;
