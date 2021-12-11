/** @format */

import { useState, useEffect } from 'react';
import { bundle } from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/Preview';
import Resizeable from './Resizeable';

function CodeCell() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizeable direction="vertical">
      <div style={{ height: '100%', display: 'flex' }}>
        <Resizeable direction="horizontal">
          <CodeEditor
            onChange={(value) => setInput(value)}
            initialValue="const a = 1;"
          />
        </Resizeable>
        <Preview code={code} />
      </div>
    </Resizeable>
  );
}

export default CodeCell;
