import * as types from '../constants/ActionsTypes';
const initialState = {
    items: [],
}

const playlist = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_SONGS_SUCCESS:
            return {
                ...state,
                items: action.items,
            }
        default:
            return state;
    }
};
export default playlist;