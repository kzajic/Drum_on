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
        console.log(state.rows[0].row)
            state.rows[0].row.map((box, index) => {
                if (box.active){
                    const audio = document.querySelector(`audio[data-key="${index}"]`);
                    audio.play();
                }
            });
            state.rows[1].row.map((box, index) => { 
                if (box.active){
                    const audio = document.querySelector(`audio[data-key="${index}"]`);
                    audio.play();
                }
            });
            return state;
        default:
            return state;
    }
}
