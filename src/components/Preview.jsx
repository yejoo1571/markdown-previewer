import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  return (
    <div className="preview">
      <h2>미리보기</h2>
      <div
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default Preview;
