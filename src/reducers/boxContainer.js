let rows = [
      { 'row' : [{'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}]},
      { 'row' : [{'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}]},
      { 'row' : [{'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}]},
      { 'row' : [{'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}]}, 
      { 'row' : [{'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}, {'active': false}]},      
    ] 

export default function(state = {rows}, action) {
    switch (action.type) {
        case 'check_box':
            let newState = {...state}
            newState.rows[action.payload[0].row].row[action.payload[1].box].active = !newState.rows[action.payload[0].row].row[action.payload[1].box].active;
            return newState;
        case 'play_drum':
            state.rows.map((row, index) => {
                let play = function (row, time) {
                    setTimeout( () => {
                        row.map((box, index) => {
                            if(box.active) {
                                const audio = document.querySelector(`audio[data-key="${index}"]`);
                                audio.currentTime=0;
                                audio.play();
                            }
                        })
                    }, time);

                }
                
                let time = 1000 * index;
                play(row.row, time);
            })

            return state;
        default:
            return state;
    }
}
