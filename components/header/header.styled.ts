import styled from "styled-components";

export const StyledHeader = styled.div`
  max-width: 100vw;
  font-size: 1.4rem;
  height: 6rem;
  padding: 0 2vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;

  background: ${(props) => props.theme.black};
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 2rem;
  }
`;

export const UserNav = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    cursor: pointer;
  }
`;
