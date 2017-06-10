import board from './board.reducers';
import turn  from './turn.reducers';
import { combineReducers } from 'redux';

const golApp = combineReducers({ turn, board });
export default golApp;