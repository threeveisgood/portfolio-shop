import React from "react";
import { useRouter } from "next/router";
import useWriteState from "hooks/state/useWriteState";
import useRewritePost from "hooks/useRewritePost";
import useWritePost from "hooks/useWritePost";
import { WriteActionButtonsBlock, Button } from "./write-action-buttons-styled";

const bson = require("bson");

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> =
  () => {
    const router = useRouter();
    const _id = bson.ObjectId();

    const {
      title,
      body,
      price,
      productURL,
      imageLinks,
      username,
      store,
      shipping,
      category,
      originalPostId,
    } = useWriteState();

    const { mutate: write } = useWritePost();
    const { mutate: rewrite } = useRewritePost(originalPostId);

    const onPublish = () => {
      write(
        {
          title,
          body,
          price,
          productURL,
          imageLinks,
          username,
          store,
          shipping,
          category,
          _id,
        },
        {
          onSuccess: () => {
            router.push(`/post/${_id}`);
          },
        }
      );
    };

    const onEdit = () => {
      rewrite(
        {
          title,
          body,
          price,
          productURL,
          imageLinks,
          store,
          shipping,
          category,
          originalPostId,
        },
        {
          onSuccess: () => {
            router.back();
          },
        }
      );
    };

    const onCancel = () => {
      return router.back();
    };

    return (
      <>
        <WriteActionButtonsBlock>
          <Button onClick={originalPostId != "" ? onEdit : onPublish}>
            {originalPostId != "" ? "수정" : "글쓰기"}
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </WriteActionButtonsBlock>
      </>
    );
  };

export default WriteActionButtons;
