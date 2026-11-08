import React from 'react';

const Editor = ({ markdown, onChange }) => {
  return (
    <div className="editor">
      <h2>마크다운 입력</h2>
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        placeholder="여기에 마크다운을 입력하세요..."
      />
      <div className = "editor-footer">
        <span>글자 수 : {markdown.length}</span>
        <button onClick={() => onChange('')}>전체 지우기</button>
      </div>
    </div>
  );
};

export default Editor;
