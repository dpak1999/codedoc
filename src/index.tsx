/** @format */

import ReactDOM from 'react-dom';
import './index.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/text-editor';

ReactDOM.render(
  <div>
    {/* <CodeCell /> */}
    <TextEditor />
  </div>,
  document.getElementById('root')
);
