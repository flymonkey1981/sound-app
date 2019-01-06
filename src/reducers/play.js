
const initialState = {
    songPlaying: false,
    timeElapsed: 0,
    songId: 0,
    viewType:'songs',
    songPaused: true
}

const play = (state = initialState, action) => {
    switch(action.type) {

        case "PLAY_SONG":
            return {
                ...state,
                songPlaying: true,
                songDetails: action.song,
                songId: action.song.id,
                timeElapsed: 0,
                songPaused: false
            };
        default:
            return state;
    }
};