import React, { useCallback, useState } from "react";
import axios from "axios";
import { UiFileInputButton } from "components/upload/uiFileInputButton";

const FilesUpload = () => {
  const [thumb, setThumb] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const onChange = useCallback(
    async (formData: FormData) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: { loaded: number; total: number }) => {
          setProgress(Math.round((event.loaded * 100) / event.total));
        },
      };
      axios
        .post<any>("/api/upload-files", formData, config)
        .then((res) => {
          setThumb([...thumb, ...res.data]);
        })
        .catch(function (error) {
          if (
            error.response.data.error ===
            "Sorry something Happened!"
          )
            return 
        });
    },
    [thumb]
  );

  return (
    <>
      <p>
        <span>이미지 업로드</span>
        <span>{progress}</span>
      </p>
      <UiFileInputButton
        label="Upload Files"
        acceptedFileTypes="image/*"
        allowMultipleFiles={true}
        uploadFileName="file"
        onChange={onChange}
      />
      <ul>
        {thumb &&
          thumb.map((item: string, i: number) => {
            console.log("item", item);
            return (
              <li key={i}>
                <img src={item} width="300" alt="Upload Images" />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FilesUpload;
