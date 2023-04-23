import React, { useReducer, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/client";
import router from "next/router";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Search } from "components/search";
import { AuthButton } from "components/common/button";
import {
  DropdownText,
  ProfileDropdown,
  ProfileDropdownMenu,
} from "components/common/dropdown";
import { UserProfileIcon } from "components/common/icons";
import { BsPencilSquare } from "react-icons/bs";
import { StyledHeader, Title, UserNav } from "./header.styled";

const Header: React.FunctionComponent = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const [session] = useSession();
  const [isProfileClick, toggleProfileClick] = useReducer(
    (previous: boolean) => !previous,
    false
  );
  const [searchToggle, setSearchToggle] = useReducer(
    (previous: boolean) => !previous,
    false
  );

  const handleProfileClick = () => {
    toggleProfileClick();
  };

  const handleProfileClickOutside = (e: MouseEvent) => {
    if (
      isProfileClick &&
      profileRef.current &&
      !profileRef.current.contains(e.target as HTMLDivElement)
    )
      toggleProfileClick();
  };

  const handleSerachToggleClick = () => {
    setSearchToggle();
  };

  const moveToWrite = () => {
    router.push({
      pathname: `/write/add-post`,
    });
  };

  const logoutHandler = () => {
    signOut();
  };

  useEffect(() => {
    document.addEventListener("click", handleProfileClickOutside);
    return () => {
      document.removeEventListener("click", handleProfileClickOutside);
    };
  }, [isProfileClick]);

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
              ref={profileRef}
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
