import * as React from "react";
import styled from "styled-components";

interface IAsideProps {}

const Aside: React.FunctionComponent<IAsideProps> = (props) => {
  return <AsideContainer>
    <StyledAside>
      <img src="68.jpg" width="160px" height="600px" />
    </StyledAside>
  </AsideContainer>;
};

export default Aside;

const AsideContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1490px) {
    display: none;
  }
`;

const StyledAside = styled.aside``;
