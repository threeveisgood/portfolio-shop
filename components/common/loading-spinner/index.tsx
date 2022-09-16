import * as React from "react";
import { LoadingCt, Spinner } from "./loading-spinner.styled";

const LoadingSpinner: React.FunctionComponent = () => {
  return (
    <LoadingCt>
      <Spinner />
    </LoadingCt>
  );
};

export default LoadingSpinner;
