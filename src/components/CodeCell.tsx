/** @format */

import React, { useEffect } from 'react';
import CodeEditor from '../components/code-editor';
import Preview from '../components/Preview';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Cell } from '../state';
import Resizeable from './Resizeable';

interface CodeCellPropType {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellPropType> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id, createBundle]);

  return (
    <Resizeable direction="vertical">
      <div style={{ height: 'calc(100% - 10px)', display: 'flex' }}>
        <Resizeable direction="horizontal">
          <CodeEditor
            onChange={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizeable>
        {bundle && <Preview code={bundle?.code} bundlingStatus={bundle?.err} />}
      </div>
    </Resizeable>
  );
};

export default CodeCell;
