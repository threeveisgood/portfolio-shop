import React from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import axios from "axios";
import { WriteActionButtonsBlock, Button } from "./write-action-buttons-styled";

const bson = require("bson");

interface IWriteActionButtonsProps {}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> =
  () => {
    const router = useRouter();
    const queryClient = useQueryClient();
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
    } = useSelector(({ write }: any) => ({
      title: write.title,
      body: write.body,
      price: write.price,
      productURL: write.productURL,
      imageLinks: write.imageLinks,
      username: write.username,
      store: write.store,
      shipping: write.shipping,
      category: write.category,
      originalPostId: write.originalPostId,
    }));

    const mutation = useMutation(
      (post: any) =>
        !!originalPostId
          ? axios.patch("/api/rewrite-post", post)
          : axios.post("/api/add-post", post),
      {
        onError: () => {},
        onSuccess: () => {
          !!originalPostId
            ? (queryClient.invalidateQueries(["getPost", originalPostId]),
              router.back())
            : null;
          router.push(`/post/${_id}`);
        },
      }
    );

    const onPublish = (e: any) => {
      mutation.mutate({
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
      });
    };

    const onEdit = (e: any) => {
      mutation.mutate({
        title,
        body,
        price,
        productURL,
        imageLinks,
        store,
        shipping,
        category,
        originalPostId,
      });
    };

    const onCancel = () => {
      return router.back();
    };

    return (
      <>
        <WriteActionButtonsBlock>
          <Button onClick={!!originalPostId ? onEdit : onPublish}>
            {!!originalPostId ? "수정" : "글쓰기"}
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </WriteActionButtonsBlock>
      </>
    );
  };

export default WriteActionButtons;
