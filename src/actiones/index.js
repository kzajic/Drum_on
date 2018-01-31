import { CHECK_SQUARE } from './types';

export const checkSquare = (rowIndex, squareIndex) => {
    return {
        type: CHECK_SQUARE,
        payload: {
            row: rowIndex,
            square: squareIndex,
        }

    }
}