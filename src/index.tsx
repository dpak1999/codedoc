/** @format */

import ReactDOM from 'react-dom';
import './index.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

ReactDOM.render(
  <Provider store={store}>
    <CellList />
  </Provider>,
  document.getElementById('root')
);
