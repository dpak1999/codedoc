/** @format */

import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesReducer from './bundleReducers';

const reducers = combineReducers({
  cells: cellsReducer,
  bundle: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
