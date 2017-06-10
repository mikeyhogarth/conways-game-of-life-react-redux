import { NEXT_TURN, INITIALIZE_BOARD } from '../actions';

export default function turn(state=0, action) {
  switch (action.type) {
    case NEXT_TURN:
      return state + 1;
    case INITIALIZE_BOARD:
      return 0;
    default:
      return state;
  }
}