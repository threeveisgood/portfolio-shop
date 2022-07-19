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
  padding: 3rem 0;
`;
