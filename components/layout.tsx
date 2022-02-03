import styled from "styled-components";
import NavBar from "./header/navBar";
import Header from "./header";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  //margin: 3rem auto;
  padding-top: 3rem;
  background: #ebecee;
`;

const IconName = styled.p`
  font-size: 1.5rem;
  margin-left: 0.3rem;
  align-items: center;
`;
