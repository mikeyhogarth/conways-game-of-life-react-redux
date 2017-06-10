import { INITIALIZE_BOARD, TOGGLE_CELL, NEXT_TURN } from './index';

export function initializeBoard() {
  return { type: INITIALIZE_BOARD }
}

export function toggleCell(index) {
  return { type: TOGGLE_CELL, index: index }
}

export function nextTurn() {
  return { type: NEXT_TURN }
}