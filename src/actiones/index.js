import { CHECK_BOX } from './types';
import { PLAY_DRUM } from './types';
import { NEXT_LINE } from './types';
import { PLAY_BOX } from './types';

export const checkBox = (rowIndex, boxIndex) => {
    let box = [{row: rowIndex}, {box: boxIndex}];
    return {
        type: CHECK_BOX,
        payload: box
    }
}

export const playBox = (boxIndex) => {
    return {
        type: PLAY_BOX,
        payload: boxIndex
    }
}

export const playDrum = () => {
    return {
        type: PLAY_DRUM,
    }
}

export const NextLine = () => {
    return {
        type: NEXT_LINE,
    }
}