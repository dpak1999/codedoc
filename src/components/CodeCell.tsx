/** @format */

import { useState } from 'react';
import { bundle } from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/Preview';
import Resizeable from './Resizeable';

function CodeCell() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const handleClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizeable direction="vertical">
      <div>
        <CodeEditor
          onChange={(value) => setInput(value)}
          initialValue="const a = 1;"
        />
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
        <Preview code={code} />
      </div>
    </Resizeable>
  );
}

export default CodeCell;
