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
            let newState = JSON.parse(JSON.stringify(state));
            newState.rows[action.payload[0].row].row[action.payload[1].box][0].active = !newState.rows[action.payload[0].row].row[action.payload[1].box][0].active;
            return newState;
        case 'next_line':
            let row = { 'row' : [
                        [{'active': false}, {'play': false}], 
                        [{'active': false}, {'play': false}], 
                        [{'active': false}, {'play': false}], 
                        [{'active': false}, {'play': false}], 
                        [{'active': false}, {'play': false}], 
                        [{'active': false}, {'play': false}], 
                        ]
                    };
            let clone = JSON.parse(JSON.stringify(state));
            clone.rows.push(row);
            return clone;
        case 'play_drum':
            state.rows.map((row, index) => {
                let play = function (row, time) {
                    setTimeout( () => {
                        let row_play = document.getElementsByClassName("board-row")[index + 1];
                            
                        row.map((box, index) => {
                            
                            if(box[0].active) {
                                row_play.classList.add("row-play");
                                let audio = document.querySelector(`audio[data-key="${index}"]`);
                                audio.currentTime=0;
                                audio.play();
                                let topBox = document.getElementsByClassName("top-box")[index];
                                topBox.classList.add("box-play");
                                setTimeout( () => {
                                    topBox.classList.remove("box-play");
                                    let row_active =  document.getElementsByClassName("row-play");
                                    if (row_active.length) {
                                        row_active[0].classList.remove("row-play");
                                        }
                                }, 500);
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
