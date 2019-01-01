import { combineReducers } from 'redux';
import entities from '../reducers/entities';
import router from '../reducers/router';
import session from '../reducers/session';

const rootReducer = combineReducers({
    entities,
    router,
    session,

});

export default rootReducer;