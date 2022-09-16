import { FilesUpload } from "types/file-upload";
import client from "./client";

export async function uploadFiles(params: FilesUpload): Promise<string[]> {
  const { data } = await client.post(
    "/upload-files",
    params.formData,
    params.config
  );

  return data;
}
