import * as types from "../constants/ActionsTypes";
import {SONGS_PATH} from "../constants/RouterConstants";

export const login = ()=>(dispatch) => {
    console.log('Login is called');
    var route = {
        keys: {},
        path: SONGS_PATH,
        options: { },
    };
    var user = {
        username: 'lee',
        age: '20',
        postCode: '3132'
    }
    dispatch({type: types.LOGIN_SUCCESS, user});
    dispatch({type: types.CHANGE_ROUTE, route});

}