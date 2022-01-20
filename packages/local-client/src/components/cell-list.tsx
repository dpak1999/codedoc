/** @format */

import React, { useEffect } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';
import './css/cell-list.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ));

  return (
    <div className="cell-list">
      <div className={cells.length === 0 ? 'force-visible' : ''}>
        <AddCell previousCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;
