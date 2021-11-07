/** @format */

import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizeable.css';

interface ResizeableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizeable: React.FC<ResizeableProps> = ({ direction, children }) => {
  let resizeableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizeableProps = {
      height: Infinity,
      width: window.innerHeight * 0.75,
      resizeHandles: ['e'],
      maxConstraints: [window.innerHeight * 0.85, Infinity],
      minConstraints: [window.innerHeight * 0.2, Infinity],
    };
  } else {
    resizeableProps = {
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
      maxConstraints: [Infinity, window.innerHeight * 0.85],
      minConstraints: [Infinity, window.innerHeight * 0.2],
    };
  }

  return <ResizableBox {...resizeableProps}>{children}</ResizableBox>;
};

export default Resizeable;
