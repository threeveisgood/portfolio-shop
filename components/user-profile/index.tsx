import React, { ReactElement } from "react";
import ChangePasswordForm from "./change-password-form";
import { Session } from "next-auth";
import Container from "components/common/container";
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
          <h3>닉네임: {session.user?.name}</h3>
        </UserNameCt>
        <ChangePasswordForm />
        <DeleteUser />
      </div>
    </Container>
  );
}
