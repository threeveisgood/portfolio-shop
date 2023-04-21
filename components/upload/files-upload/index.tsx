import React, { useCallback, useState, useEffect } from "react";
import { UiFileInputButton } from "components/upload/ui-file-input-button";
import { ChangeToThumbnail, ChangeToFrontURL } from "lib/change-to-thumbnail";
import useWriteStateActions from "hooks/state/useWriteStateActions";
import useUploadFiles from "hooks/useUploadFiles";
import useWriteState from "hooks/state/useWriteState";
import {
  DeleteImageButton,
  ThumbnailDiv,
  ThumbnailLi,
  ThumbnailUl,
} from "./files-upload.styled";
import { TiDelete } from "react-icons/ti";

const FilesUpload = () => {
  const [thumb, setThumb] = useState<string[]>([]);

  const { imageLinks } = useWriteState();
  const { setImageLinks } = useWriteStateActions();

  const { mutate } = useUploadFiles();

  const addImageLinks = (links: string[]) => setImageLinks(links);

  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event: { loaded: number; total: number }) => {},
  };

  const onChange = useCallback(
    async (formData: FormData) => {
      mutate(
        { formData, config },
        {
          onSuccess: (data) => {
            const url = ChangeToFrontURL(data);
            setThumb([...thumb, ...data]);

            addImageLinks(url);
          },
        }
      );
    },
    [thumb]
  );

  const onDeleteImage = (index: number) => {
    // const newThumb = thumb.filter((item, i) => i !== index);
    // setThumb(() => newThumb);

    return () => {
      // const newImageLinks = imageLinks.filter((item, i) => i !== index);
      // addImageLinks(newImageLinks);
    };
  };

  return (
    <>
      <UiFileInputButton
        label="상품 이미지 업로드"
        acceptedFileTypes="image/*"
        allowMultipleFiles={true}
        uploadFileName="file"
        onChange={onChange}
      />
      <ThumbnailUl>
        {thumb &&
          thumb.map((item: string, i: number) => {
            const changedItem = ChangeToThumbnail(item);

            return (
              <ThumbnailLi key={i}>
                <ThumbnailDiv>
                  <img src={changedItem} width="60" alt="Uploaded Image" />
                  <DeleteImageButton onClick={onDeleteImage(i)}>
                    <TiDelete />
                  </DeleteImageButton>
                </ThumbnailDiv>
              </ThumbnailLi>
            );
          })}
      </ThumbnailUl>
    </>
  );
};

export default FilesUpload;
