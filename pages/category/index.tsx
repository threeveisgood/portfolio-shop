import React, { ReactElement } from "react";
import PostList from "components/post-list";

export default function category(): ReactElement {
  return (
    <>
      <PostList isCategory={true} />
    </>
  );
}
