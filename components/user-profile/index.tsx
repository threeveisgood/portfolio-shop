import React, { ReactElement } from "react";
import { Session } from "next-auth";
import Container from "components/common/container";
import { FaUser } from "react-icons/fa";
import ChangePasswordForm from "./change-password-form";
import { UserNameCt } from "./user-profile.styled";
import DeleteUser from "./delete-user";

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
