import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UiFileInputButton } from "components/upload/ui-file-input-button";
import { ChangeToThumbnail, ChangeToFrontURL } from "lib/change-to-thumbnail";
import useWriteStateActions from "hooks/state/useWriteStateActions";
import useUploadFiles from "hooks/useUploadFiles";
import { PrimaryP, ThumbnailLi } from "./files-upload.styled";

const FilesUpload = () => {
  const dispatch = useDispatch();
  const [thumb, setThumb] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const { setImageLinks } = useWriteStateActions();
  const { mutate } = useUploadFiles();

  const addImageLinks = (links: string[]) => dispatch(setImageLinks(links));

  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event: { loaded: number; total: number }) => {
      setProgress(Math.round((event.loaded * 100) / event.total));
    },
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
      <PrimaryP>
        <span>이미지 업로드 (10MB 미만)&nbsp;</span>
        {progress < 100 && <span>{progress}%</span>}
      </PrimaryP>
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

export default React.memo(FilesUpload);
