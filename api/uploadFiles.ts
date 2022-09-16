import { FilesUpload } from "types/file-upload";
import client from "./client";

export async function uploadFiles(params: FilesUpload): Promise<any> {
  const { data } = await client.post(
    "/upload-files",
    params.formData,
    params.config
  );

  return data;
}
