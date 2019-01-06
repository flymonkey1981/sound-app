import { combineReducers } from 'redux';
import entities from '../reducers/entities';
import router from '../reducers/router';
import session from '../reducers/session';
import playlist from "./playlist";

const rootReducer = combineReducers({
    entities,
    router,
    session,
    playlist,


});

export default rootReducer;