import React, { ReactElement } from "react";
import ChangePasswordForm from "./change-password-form";
import { Session } from "next-auth";
import Container from "components/common/container";
import { UserNameCt } from "./user-profile.styled";
import DeleteUser from "./delete-user";
import { FaUser } from "react-icons/fa";

interface ProfileProps {
  session: Session;
}

export default function UserProfile({ session }: ProfileProps): ReactElement {
  return (
    <Container>
      <div>
        <UserNameCt>
          <h3>
            <FaUser />
            &nbsp;&nbsp;{session.user?.name}
          </h3>
        </UserNameCt>
        <ChangePasswordForm />
        <DeleteUser />
      </div>
    </Container>
  );
}
