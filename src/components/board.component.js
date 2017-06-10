import React from 'react';
import { times } from 'lodash';
import CellContainer  from './cell.container';

const Board = (props) => {
  
  const { turn, size, data, onNextTurn, onStart, onStop, onReset } = props;

  return (
    <div>
      <p>
        <button onClick={onNextTurn}>Step</button>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>
      </p>
      <table className='board'>
        <tbody>
          { times(size, (row) => {
            return <tr key={`row${row}`}>
              { times(size, (column) => {
                const cellIdx = (row*size) + column;
                return <CellContainer 
                  id={cellIdx}
                  value = {data[cellIdx]} 
                  key={`cell${cellIdx}`} />
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;