import { uploadFiles } from "api/uploadFiles";
import { useMutation } from "react-query";

export default function useUploadFiles() {
  const mutation = useMutation(uploadFiles);

  return mutation;
}
