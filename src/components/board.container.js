import React, { Component } from 'react';
import Board from './board.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initializeBoard, nextTurn } from '../actions/board.actions';

class BoardContainer extends Component {
  componentDidMount() {
    this.props.dispatch(initializeBoard())
  }

  render() {
    return (<Board { ...this.props } />);
  }
}

const mapStateToProps = (state) => {
  const turn = state.turn;
  const data = state.board.data;
  const size = state.board.size;
  return { turn, data, size }
}

const mapDispatchToProps = (dispatch) => {
  const basicActions = bindActionCreators({ 
    onNextTurn: nextTurn, 
    onReset: initializeBoard 
  }, dispatch);
  
  return {
    dispatch, ...basicActions,
    onStart: () => {
      if(this.timer) return;
      this.timer = setInterval(() => dispatch(nextTurn()), 100);
    },
    onStop: () => {
      if(!this.timer) return;
      clearInterval(this.timer)
      delete this.timer;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);