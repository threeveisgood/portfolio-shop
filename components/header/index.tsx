import React, { useState } from "react";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Search } from "components/search";
import { AuthButton } from "components/styled/button";
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

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <a>
            <Title>SandoDeal</Title>
          </a>
        </Link>

        <Search isMobile={false} />
        <UserNav>
          {/* {session && (
            <UserProfileIcon>
              <Link href="/cart">
                <a>
                  <IoCartOutline />
                </a>
              </Link>
            </UserProfileIcon>
          )} */}
          {session && (
            <UserProfileIcon
              className="dropdown last"
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
          {!session && !loading && (
            <Link href="/auth">
              <a>
                <AuthButton>로그인</AuthButton>
              </a>
            </Link>
          )}
        </UserNav>
      </StyledHeader>
      <div>
      <Search isMobile={true} />
      </div>
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
    /* flex-wrap: wrap;
    align-content: space-between;     */
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;

  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);  
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;  
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
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
