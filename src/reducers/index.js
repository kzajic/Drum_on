import { combineReducers} from 'redux';
import boxContainer from './boxContainer';
import topBoxes from './topBoxes';

export default combineReducers({
    boxes: boxContainer,
    topBoxes: topBoxes,
});