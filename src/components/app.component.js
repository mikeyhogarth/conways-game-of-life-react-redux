import React, { Component } from 'react';
import './app.css';
import BoardContainer from './board.container';

class App extends Component {

  render() {
    return (
      <div className="gol__main">
        <h1>Conway's Game of Life</h1>
        <BoardContainer />
      </div>
    );
  }
}

export default App;