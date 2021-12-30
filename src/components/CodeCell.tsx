/** @format */

import React, { useEffect } from 'react';
import CodeEditor from '../components/code-editor';
import Preview from '../components/Preview';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Cell } from '../state';
import Resizeable from './Resizeable';
import './css/code-cell.css';
import { useCumulativeCode } from '../hooks/use-cumulative-code';
interface CodeCellPropType {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellPropType> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, createBundle, cumulativeCode]);

  return (
    <Resizeable direction="vertical">
      <div style={{ height: 'calc(100% - 10px)', display: 'flex' }}>
        <Resizeable direction="horizontal">
          <CodeEditor
            onChange={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizeable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle?.code} bundlingStatus={bundle?.err} />
          )}
        </div>
      </div>
    </Resizeable>
  );
};

export default CodeCell;
