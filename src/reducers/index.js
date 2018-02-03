import { combineReducers} from 'redux';
import boxContainer from './boxContainer';
import topBoxes from './topBoxes';
//import playDrum from './playDrum';

export default combineReducers({
    boxes: boxContainer,
    topBoxes: topBoxes,
    //play: playDrum
});