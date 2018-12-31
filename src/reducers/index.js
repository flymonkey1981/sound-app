import { combineReducers } from 'redux';
import entities from '../reducers/entities';
import router from '../reducers/router'

const rootReducer = combineReducers({
    entities,
    router,

});

export default rootReducer;