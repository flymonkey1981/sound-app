import * as types from "../constants/ActionsTypes";
import {INDEX_PATH, PRODUCTLIST_PATH, INITIAL_ROUTE, LOGIN_PATH} from "../constants/RouterConstants";


export const login = (form, history)=>(dispatch) => {
    console.log('Login is called'+form.email);

    if('123' === form.password){
        var route = {
            keys: {},
            path: PRODUCTLIST_PATH,
            options: { },
        };
        var user = {
            username: form.email,
            age: '20',
            postCode: '3132'
        }
        dispatch({type: types.LOGIN_SUCCESS, user});
       // dispatch({type: types.CHANGE_ROUTE, route});
        history.push('/products');

    }else{
        history.push('/login')
       // BrowserRouter.push("/")

    }
}

export const logout = (history)=> (dispatch) => {
    history.push('/login');
    dispatch({type: types.LOGOUT});
}