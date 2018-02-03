let topBoxes = [
      {'play': false}, {'play': false}, {'play': false}, {'play': false}, {'play': false}, {'play': false},]

export default function(state = {topBoxes}, action) {
    switch (action.type) {
        case 'play_box':
            let newState = {...state}
            newState.topBoxes[action.payload].play = !newState.topBoxes[action.payload].play;
            const audio = document.querySelector(`audio[data-key="${action.payload}"]`);
            //if(!audio) return;
            //audio.currentTime=0;
            audio.play();
            return newState; 
        default:
            return state;
    }
}