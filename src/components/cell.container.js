import { Cell }  from './cell.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCell as onCellClick } from '../actions/board.actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onCellClick }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cell);