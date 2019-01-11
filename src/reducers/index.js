import { combineReducers } from 'redux';
import entities from '../reducers/entities';
import router from '../reducers/router';
import session from '../reducers/session';
import playlist from "./playlist";
import login from "./login";
import product from "./product"

const rootReducer = combineReducers({
    entities,
    router,
    session,
    playlist,
    login,
    product
});

export default rootReducer;