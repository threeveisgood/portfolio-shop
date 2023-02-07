import React, { useCallback, useState } from "react";
import { UiFileInputButton } from "components/upload/ui-file-input-button";
import { ChangeToThumbnail, ChangeToFrontURL } from "lib/change-to-thumbnail";
import useWriteStateActions from "hooks/state/useWriteStateActions";
import useUploadFiles from "hooks/useUploadFiles";
import { ThumbnailLi } from "./files-upload.styled";

const FilesUpload = () => {
  const [thumb, setThumb] = useState<string[]>([]);
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

  return (
    <>
      <UiFileInputButton
        label="상품 이미지 업로드"
        acceptedFileTypes="image/*"
        allowMultipleFiles={true}
        uploadFileName="file"
        onChange={onChange}
      />
      <ul>
        {thumb &&
          thumb.map((item: string, i: number) => {
            const changedItem = ChangeToThumbnail(item);

            return (
              <ThumbnailLi key={i}>
                <img src={changedItem} width="100" alt="Uploaded Image" />
              </ThumbnailLi>
            );
          })}
      </ul>
    </>
  );
};

export default FilesUpload;
