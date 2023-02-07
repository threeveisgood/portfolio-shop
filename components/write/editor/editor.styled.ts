import styled from "styled-components";
import Responsive from "components/common/responsive";
import Select from "react-select";

export const EditorBlock = styled(Responsive)`
  padding: 3rem 0 1rem;
`;

export const TitleInput = styled.input`
  background: inherit;
  font-size: 2.3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.black};
  margin-bottom: 1rem;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.black};
  }
`;

export const QuillWrapper = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;

  .ql-toolbar.ql-snow {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: 1px solid ${(props) => props.theme.gray};
  }

  .ql-container.ql-snow {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid ${(props) => props.theme.gray};
    background-color: #fff;
  }

  .ql-editor {
    padding: 1rem;
    min-height: 320px;
    font-size: 1.125;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

export const CategorySelect = styled(Select)`
  width: 30rem;
  font-weight: 700;
  border-color: ${(props) => props.theme.black};

  & > div {
    font-size: 1.2rem;
  }

  & > div > div > div {
    color: ${(props) => props.theme.black};
  }
`;
