import * as types from '../constants/ActionsTypes';
import playlist from "./playlist";
const initialState = {
    isLogin: false,
    user:{},
};

const login = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user

            };
        default:
            return state;
    }

};
export default login;