import React, { useCallback, useState } from "react";
import axios from "axios";
import { UiFileInputButton } from "components/upload/uiFileInputButton";

const IndexPage = () => {
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
      axios.post<any>("/api/imgupload", formData, config).then((res) => {
        setThumb([...thumb, ...res.data]);
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
        label="Upload Single File"
        // allowMultipleFiles 가 false 일경우, 하나씩만 올릴 수 있다.
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
                <img src={`/uploads/${item}`} width="300" alt="업로드이미지" />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default IndexPage;

// import React from "react";
// const aws = require('aws-sdk')

// const S3 = new aws.S3()

// function Upload() {
//   const fileInput = React.useRef<any>();

//   const config = {
//     bucketName: process.env.BUCKET_NAME,    
//     region: process.env.REGION,
//     accessKeyId: process.env.ACCESS_KEY,
//     secretAccessKey: process.env.SECRET_KEY,
//     signatureVersion: 'v4'
//   };

//   const handleClick = (event: any) => {
//     event.preventDefault()
//     let newArr = fileInput.current.files
//     for (let i = 0; i < newArr.length; i++) {
//       handleUpload(newArr[i]);
//     }
//   };

//   const handleUpload = (file: any) => {
//     let newFileName = file.name.replace(/\..+$/, "");
//     const ReactS3Client = new S3(config);
//     ReactS3Client.uploadFile(file, newFileName).then((data: any) => {
//       if (data.status === 204) {
//         console.log("success");
//       } else {
//         console.log("fail");
//       }
//     });
//   };

//   return (
//     <>
//       <form className='upload-steps' onSubmit={handleClick}>
//         <label>
//           Upload file:
//           <input type='file' multiple ref={fileInput} />
//         </label>
//         <br />
//         <button type='submit'>Upload</button>
//       </form>
//     </>
//   );
// }
// export default Upload;

// import React, { ReactElement } from "react";

// interface Props {}

// export default function FileUpload({}: Props): ReactElement {
//   const uploadImage = async (e: any) => {
//     const file = e.target.files[0];
//     const filename = encodeURIComponent(file.name);
//     const res = await fetch(`/api/upload-files?file=${filename}`);
//     const { url, fields } = await res.json();
//     const formData = new FormData();

    
//     Object.entries({ ...fields, file }).forEach(([key, value]) => {
//         // @ts-ignore
//         formData.append(key, value);
//       });

//     const upload = await fetch(url, {
//       method: "POST",
//       body: formData,
//     });

//     if (upload.ok) {
//       console.log("Uploaded Succeesfully!");
//     } else {
//       console.error("Uploaded Failed.");
//     }
//   };

//   return (
//     <div>
//       <input onChange={uploadImage} type="file" />
//     </div>
//   );
// }
