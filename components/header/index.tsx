import React, { useCallback, useState } from "react";
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
import { StyledHeader, Title, UserNav } from "./header.styled";

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
