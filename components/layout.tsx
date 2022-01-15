import styled from "styled-components";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Search } from "./search";
import NavBar from "./header/navBar";
import { AuthButton, NavButton, StyledButton } from "./styled/button";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  console.log(loading);
  console.log(session);

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
          {session && (
            <Link href="/cart">
              <a>
                <UserProfileIcon>
                  <IoCartOutline />
                </UserProfileIcon>
              </a>
            </Link>
          )}
          {session && (
            <Link href="/profile">
              <a>
                <UserProfileIcon className="last">
                  <CgProfile />
                </UserProfileIcon>
              </a>
            </Link>
          )}
          {!session && (
            <Link href="/auth">
              <a>
                <AuthButton>Log in</AuthButton>
              </a>
            </Link>
          )}
          {/* {session && <AuthButton onClick={logoutHandler}>Log out</AuthButton>} */}
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

  background: -webkit-linear-gradient(
    0deg,
    rgba(100, 101, 101, 1) 0%,
    rgba(0, 0, 0, 1) 54%
  );
  background: -moz-linear-gradient(
    0deg,
    rgba(100, 101, 101, 1) 0%,
    rgba(0, 0, 0, 1) 54%
  );
  background: linear-gradient(
    0deg,
    rgba(100, 101, 101, 1) 0%,
    rgba(0, 0, 0, 1) 54%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const UserNav = styled.nav`
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

const UserProfileIcon = styled.div`
  display: flex;
  font-size: 2.8rem;
  color: black;
  
  margin-right: 1.4rem;

  &.last {
    margin-right: 0;
  }
  /* height: 3rem;
  width: 3rem; */
`;

const IconName = styled.p`
  font-size: 1.5rem;
  margin-left: 0.3rem;
  align-items: center;
`;
