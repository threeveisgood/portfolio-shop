import React, { useRef, useEffect } from 'react'
import dynamic from "next/dynamic";
import Responsive from 'components/styled/responsive'
import Quill from 'quill'
import "react-quill/dist/quill.snow.css";
import styled from 'styled-components'

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

interface EditorProps {
}

const Editor: React.FunctionComponent<EditorProps> = () => {
  const quillElement = useRef<any>(null)
  const quillInstance = useRef<any>(null)

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    })
  }, [])

  return (
    <EditorBlock>
      <TitleInput placeholder='제목을 입력하세요' />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;

const EditorBlock = styled(Responsive)`
  padding: 5rem 0 5rem;
`

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 100%;
`

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`