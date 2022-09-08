import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 0 2.8rem;
  overflow-x: auto;
  overflow-y: auto;
  text-align: center;

  background: ${(props) => props.theme.black};
  color: #fff;

  @media only screen and (min-width: ${(props) =>
      props.theme.responsive.phone}) {
    justify-content: center;
  }
`;

export const InformationUl = styled.ul`
  display: flex;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.2;
`;

export const InformationLi = styled.li`
  font-size: 1.6rem;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export const InformationA = styled.a`
  color: #fff;
`;
