let rows = [
      { 'squares' : [{'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}]},
      { 'squares' : [{'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}]},
      { 'squares' : [{'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}]},
      { 'squares' : [{'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}]}, 
      { 'squares' : [{'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}, {'color': 'white'}]},      
    ] 

export default function(state = {rows}, action) {
    switch (action.type) {
        case 'SOME_ACTION':
            return state.rows.map(
                (row, index)=> {
                    if (index === action.row ){
                        row.map(
                            (square, index) => {
                                (index === action.square) ? {...square, active: !square.active} : square               
                            }
                        )
                    }
                }
            )
        default:
            return state;
    }
}