import styled from "styled-components";

export const ResponsiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 102.4rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 76.8rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
