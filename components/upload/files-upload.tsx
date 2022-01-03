import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { UiFileInputButton } from "components/upload/ui-file-input-button";
import ChangeToThumbnail from "lib/change-to-thumbnail"

const FilesUpload = () => {
  const dispatch = useDispatch()
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
      axios.post<any>("/api/upload-files", formData, config).then((res) => {
        setThumb([...thumb, ...res.data]);
        const setImageLinks: any = useCallback(() => dispatch(setImageLinks(thumb)), [dispatch])
        setImageLinks()
      });
    },
    [thumb]
  );

  return (
    <>
      <p>
        <span>Images Upload&nbsp;</span>
        <span>{progress}%</span>
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
            const changedItem = ChangeToThumbnail(item)

            console.log("item", item);
            return (
              <li key={i}>                
                  <img src={changedItem} width="300" alt="Uploaded Image" />                                
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FilesUpload;
