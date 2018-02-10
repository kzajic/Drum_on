let rows = [
      { 'row' : [
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
        ]
    },
      { 'row' : [
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
        ]
    },
      { 'row' : [
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
        ]
    },
      { 'row' : [
         [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          ]
        }, 
      { 'row' : [
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          [{'active': false}, {'play': false}], 
          ]
        },      
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
                        let row_play = document.getElementsByClassName("board-row")[index + 1];
                            row_play.classList.add("row-play");
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
                let row_active =  document.getElementsByClassName("row-play")[0];
                if (row_active !== undefined) {
                    row_active.classList.remove("row-play");
                }
            })
            return state;
        default:
            return state;
    }
}
