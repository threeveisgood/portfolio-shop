import styled from "styled-components";
import NavBar from "./header/navBar";
import Header from "./header";
import { Toaster } from "react-hot-toast";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavBar />
      <Container>{children}</Container>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.5rem",
            background: "#F5F5DC",
          },
        }}
      />
    </>
  );
};

export default Layout;

const Container = styled.div`
  padding: 3rem 0;
`;
