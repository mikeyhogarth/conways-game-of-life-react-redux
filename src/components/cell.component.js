import React from 'react';

export const Cell = ({ onCellClick, value, id }) => {
  return (
    <td onClick={ e => onCellClick(id) } 
        className={`cell ${value ? 'on' : 'off'}`}></td>
  );
}