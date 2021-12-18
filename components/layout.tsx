import styled from "styled-components";
import Link from "next/link";

import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { Search } from "./search";
import NavBar from "./header/navBar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Link href="/">
          <a>
            <Title>SandoShop</Title>
          </a>
        </Link>

        <Search />
        <UserNav>
          <Link href="/">
            <a>
              <UserNavIcon>
                <IoCartOutline />
              </UserNavIcon>
            </a>
          </Link>

          <Link href="/">
            <a>
              <UserNavIcon className="last">
                <AiOutlineUser />
              </UserNavIcon>
            </a>
          </Link>
        </UserNav>
      </Header>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  margin: 3rem auto;
`;

const Header = styled.div`
  max-width: 100vw;
  font-size: 1.4rem;
  height: 7rem;
  padding: 0 2vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    flex-wrap: wrap;
    align-content: space-between;
    height: 11rem;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;

  background: #1553cf;
  background: -webkit-linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
  background: -moz-linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
  background: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const UserNav = styled.nav`
  //align-self: stretch;  
  display: flex;
  align-items: center;

  & > * {
    cursor: pointer;
    /* padding: 0 2rem;      
      height: 100%;
      display: flex;
      align-items: center; */      
  }
`;

const UserNavIcon = styled.div`
  font-size: 2.8rem;
  color: #1553CF;

  margin-right: 1.2rem;

  &.last {
    margin-right: 0;
  }
  /* height: 3rem;
  width: 3rem; */
`;
