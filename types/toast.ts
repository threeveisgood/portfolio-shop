import { AxiosError } from "axios";

type ToastErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type ToastApiError = AxiosError<{
  statusCode: number;
  error: string;
  message: ToastErrorData;
  data: ToastErrorData;
}>;
