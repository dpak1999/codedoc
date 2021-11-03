/** @format */

import { ResizableBox } from 'react-resizable';
import './resizeable.css';

interface ResizeableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizeable: React.FC<ResizeableProps> = ({ direction, children }) => {
  return (
    <ResizableBox height={300} width={300} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizeable;
