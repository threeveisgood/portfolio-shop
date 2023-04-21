import { StyledButton } from "components/common/button";
import styled from "styled-components";

export const UploadButton = styled(StyledButton)`
  margin-top: 1rem;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  background: ${(props) => props.theme.black};
`;

export const UploadForm = styled.form`
  margin-bottom: 2rem;
`;
