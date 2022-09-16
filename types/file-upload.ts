export interface FilesUploadConfig {
  headers: {
    "content-type": string;
  };
  onUploadProgress: (event: { loaded: number; total: number }) => void;
}

export interface FilesUpload {
  formData: FormData;
  config: FilesUploadConfig;
}
