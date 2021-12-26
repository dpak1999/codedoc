/** @format */

import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './CodeCell';
import TextEditor from './text-editor';

interface CellListItemProp {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProp> = ({ cell }) => {
  return (
    <div>
      <ActionBar id={cell.id} />
      {cell.type === 'code' ? (
        <CodeCell cell={cell} />
      ) : (
        <TextEditor cell={cell} />
      )}
    </div>
  );
};

export default CellListItem;
