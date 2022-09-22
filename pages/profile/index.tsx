import { getSession } from "next-auth/client";
import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import UserProfile from "components/user-profile";
import { Session } from "next-auth";

interface ProfileProps {
  session: Session;
}

export default function Profile({ session }: ProfileProps): ReactElement {
  return <UserProfile session={session} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
