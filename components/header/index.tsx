import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/client";
import router from "next/router";
import Link from "next/link";
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
import { AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Header: React.FunctionComponent = () => {
  const [session, loading] = useSession();
  const [isProfileClick, setIsProfileClick] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleProfileClick = useCallback(() => {
    setIsProfileClick(!isProfileClick);
  }, [isProfileClick]);

  const handleSerachToggleClick = () => {
    setSearchToggle(!searchToggle);
  };

  const moveToWrite = () => {
    router.push({
      pathname: `/write/add-post`,
    });
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

        <Search />
        <UserNav>
          {
            <UserProfileIcon isMobile onClick={handleSerachToggleClick}>
              <AiOutlineSearch />
            </UserProfileIcon>
          }
          {session && (
            <UserProfileIcon>
              <BsPencilSquare onClick={moveToWrite} />
            </UserProfileIcon>
          )}
          {session && (
            <UserProfileIcon
              className="dropdown last"
              onClick={handleProfileClick}
              isProfileClick={isProfileClick}
            >
              <CgProfile />
              {isProfileClick && (
                <ProfileDropdown>
                  <ProfileDropdownMenu className="top">
                    <div>
                      <AiOutlineUser />
                    </div>
                    <Link href="/profile">
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
                    <Link href="/profile">
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
      <div>
        <Search isMobile searchToggle={searchToggle} />
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
`;

const Title = styled.div`
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

const UserNav = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    cursor: pointer;
  }
`;
