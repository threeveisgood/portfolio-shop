import styled from "styled-components";
import { ProfileDropdown, ProfileDropdownMenu } from "./dropdown";

interface ProfileMenuProps {
  readonly isProfileClick?: boolean
}

export const UserProfileIcon = styled.div<ProfileMenuProps>`
  display: flex;
  font-size: 2.8rem;
  color: ${props => props.theme.primary};
  margin-right: 1.6rem;

  &.dropdown {
    position: relative;

    & > ${ProfileDropdown} {
      
    }

    & > ${ProfileDropdown} > ${ProfileDropdownMenu} {
      display: ${props => props.isProfileClick ? "flex" : "none"}
    }    
  }

  &.last {
    margin-right: 0;
  }
  
`;
