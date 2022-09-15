import React, { ReactElement } from "react";
import Responsive from "components/common/responsive";
import Editor from "components/write/editor";
import WriteActionButtons from "components/write/write-action-buttons";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";

export default function addPost(): ReactElement {
  return (
    <Responsive>
      <Editor />
      <WriteActionButtons />
    </Responsive>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
