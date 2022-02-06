import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Search } from "components/search";
import { AuthButton, NavButton, StyledButton } from "components/styled/button";
import {
  DropdownText,
  ProfileDropdown,
  ProfileDropdownMenu,
} from "components/styled/dropdown";
import { UserProfileIcon } from "components/styled/icons";

const Header: React.FunctionComponent = () => {
  const [session, loading] = useSession();
  const [isProfileClick, setIsProfileClick] = useState(false);

  const handleClick = () => {
    setIsProfileClick(!isProfileClick);
  };

  const logoutHandler = () => {
    signOut();
  };

  console.log(loading);
  console.log(session);

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <a>
            <Title>SandoShop</Title>
          </a>
        </Link>

        <Search />
        <UserNav>
          {session && (
            <UserProfileIcon>
              <Link href="/cart">
                <a>
                  <IoCartOutline />
                </a>
              </Link>
            </UserProfileIcon>
          )}
          {session && (
            <UserProfileIcon
              className="last dropdown"
              onClick={handleClick}
              isProfileClick={isProfileClick}
            >
              <CgProfile />
              {isProfileClick && (
                <ProfileDropdown>
                  <ProfileDropdownMenu className="top">
                    <div>
                      <AiOutlineUser />
                    </div>
                    <Link href="profile">
                      <a>
                        <DropdownText>&nbsp;프로필</DropdownText>
                      </a>
                    </Link>
                  </ProfileDropdownMenu>
                  <ProfileDropdownMenu
                    className="bottom"
                    onClick={logoutHandler}
                  >
                    <HiOutlineLogout />
                    <Link href="profile">
                      <a>
                        <DropdownText>&nbsp;로그아웃</DropdownText>
                      </a>
                    </Link>
                  </ProfileDropdownMenu>
                </ProfileDropdown>
              )}
            </UserProfileIcon>
          )}
          {!session && (
            <Link href="/auth">
              <a>
                <AuthButton>로그인</AuthButton>
              </a>
            </Link>
          )}
        </UserNav>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.div`
  max-width: 100vw;
  font-size: 1.4rem;
  height: 6rem;
  padding: 0 2vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${(props) => props.theme.responsive.phone}) {
    flex-wrap: wrap;
    align-content: space-between;
    height: 11rem;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
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
