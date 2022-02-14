import React, { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Responsive from "components/styled/responsive";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/write";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  {
    ssr: false,
  }
);

interface EditorProps {}

const Editor: React.FunctionComponent<EditorProps> = () => {
  const dispatch = useDispatch();  
  const quillRef = useRef<any>(null);

  const { title, body } = useSelector(({ write }: any) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeTitle = (e: any) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeText = (text: any) => {    
    onChangeField({ key: "body", value: text });
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link", "image"],
    ],
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  
  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <ReactQuill
          theme="snow"
          placeholder="내용을 입력하세요"
          modules={modules}
          forwardedRef={quillRef}        
          onChange={onChangeText}  
        />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;

const EditorBlock = styled(Responsive)`
  padding: 3rem 0 5rem;
`;

const TitleInput = styled.input`
  background: inherit;
  font-size: 2.3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  background: #f7f7f7;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
