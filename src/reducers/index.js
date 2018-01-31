import { combineReducers} from 'redux';
import boardSquares from './boardSquares';

export default combineReducers({
    board: boardSquares
});