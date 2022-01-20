/** @format */

import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './CodeCell';
import TextEditor from './text-editor';
import './css/cell-list-item.css';
interface CellListItemProp {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProp> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      {cell.type === 'code' ? (
        <>
          <div className="action-bar-wrapper">
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      ) : (
        <>
          <TextEditor cell={cell} />
          <ActionBar id={cell.id} />
        </>
      )}
    </div>
  );
};

export default CellListItem;
