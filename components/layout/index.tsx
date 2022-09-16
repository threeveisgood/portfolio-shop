import NavBar from "../header/nav-bar";
import Header from "../header";
import { Toaster } from "react-hot-toast";
import { Container } from "./layout.styled";

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
