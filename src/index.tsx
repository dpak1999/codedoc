/** @format */

import ReactDOM from 'react-dom';
import './index.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';

ReactDOM.render(
  <Provider store={store}>
    {/* <CodeCell /> */}
    <TextEditor />
  </Provider>,
  document.getElementById('root')
);
