import { StyledButton } from "components/common/button";
import styled from "styled-components";

export const UploadButton = styled(StyledButton)`
  margin-top: 1rem;
  font-size: 1.2rem;
  background: ${(props) => props.theme.black};
`;

export const UploadForm = styled.form`
  margin-bottom: 2rem;
`;
