import styled from "styled-components";
import { StyledButton } from "components/styled/button";

export const FormField = styled.div`
  position: relative;
  padding: 15px 0 0;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
`;

export const FieldContainer = styled.div`
  margin-top: 3rem;
`;

export const StyledInput = styled.input`
  width: 30rem;
  border: 0;
  border-bottom: 2px solid grey;
  border-image: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
  border-image-slice: 1;
  outline: 0;
  font-size: 1.5rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #1553cf;
      font-weight: 500;
    }
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 3px;
    border-image: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
    border-image-slice: 1;
  }
`;

export const FormSubmitButton = styled(StyledButton)`
  font-size: 1.3rem;
  margin-top: 4rem;
`;

export const FormSubmitLastButton = styled(FormSubmitButton)`
  margin-left: 2rem;
`
