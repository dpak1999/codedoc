/** @format */

import React, { useState, useEffect } from 'react';
import bundle from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/Preview';
import { useActions } from '../hooks/use-actions';
import { Cell } from '../state';
import Resizeable from './Resizeable';

interface CodeCellPropType {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellPropType> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizeable direction="vertical">
      <div style={{ height: 'calc(100% - 10px)', display: 'flex' }}>
        <Resizeable direction="horizontal">
          <CodeEditor
            onChange={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizeable>
        <Preview code={code} bundlingStatus={err} />
      </div>
    </Resizeable>
  );
};

export default CodeCell;
