import { INITIALIZE_BOARD, TOGGLE_CELL, NEXT_TURN } from '../actions';
import applyConwayRules from '../utilities/conwayRules.js';

export default function board(state={ data: [], size: 20 }, action) {
  switch (action.type) {

    case INITIALIZE_BOARD:
      return Object.assign({}, state, { data: Array.apply(null, new Array(state.size ** 2)).map(e => false)});

    case TOGGLE_CELL:
      return Object.assign({}, state, { size: state.size, data: state.data.map((e,idx) => idx === action.index ? !e : e)});

    case NEXT_TURN: 
      return Object.assign({}, state, { data: applyConwayRules(state.data, state.size) });

    default:
      return state;
  }
}