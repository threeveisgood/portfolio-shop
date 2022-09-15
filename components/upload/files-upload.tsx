import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UiFileInputButton } from "components/upload/ui-file-input-button";
import { ChangeToThumbnail, ChangeToFrontURL } from "lib/change-to-thumbnail";
import styled from "styled-components";
import useWriteStateActions from "hooks/state/useWriteStateActions";

const FilesUpload = () => {
  const dispatch = useDispatch();
  const [thumb, setThumb] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const { setImageLinks } = useWriteStateActions();

  const addImageLinks = (links: string[]) => dispatch(setImageLinks(links));

  const onChange = useCallback(
    async (formData: FormData) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: { loaded: number; total: number }) => {
          setProgress(Math.round((event.loaded * 100) / event.total));
        },
      };
      axios.post("/api/upload-files", formData, config).then((res) => {
        const url = ChangeToFrontURL(res.data);
        setThumb([...thumb, ...res.data]);

        addImageLinks(url);
      });
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
      <ThumbnailUl>
        {thumb &&
          thumb.map((item: string, i: number) => {
            const changedItem = ChangeToThumbnail(item);

            return (
              <ThumbnailLi key={i}>
                <img src={changedItem} width="100" alt="Uploaded Image" />
              </ThumbnailLi>
            );
          })}
      </ThumbnailUl>
    </>
  );
};

export default React.memo(FilesUpload);

export const ThumbnailUl = styled.ul``;

export const ThumbnailLi = styled.li`
  display: inline;
  margin-right: 0.8rem;
`;

const PrimaryP = styled.p`
  ${(props) => props.theme.black};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
