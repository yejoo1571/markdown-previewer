import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState(`# 마크다운 미리보기
    ## 사용 방법
    - 왼쪽에 입력하면 오른쪽에 바로 출력
    - 굵게, 기울임, 코드도 됩니다.
    
    > 인용문도 지원해요.
    `);

  return (
    <div className="app">
      <h1 className='header'>마크다운 미리보기</h1>
      <div className="container">
        <Editor markdown={markdown} onChange={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
