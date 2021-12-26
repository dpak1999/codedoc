/** @format */

import { Cell } from '../state';

interface CellListItemProp {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProp> = ({ cell }) => {
  return <div>{cell.id}</div>;
};

export default CellListItem;
