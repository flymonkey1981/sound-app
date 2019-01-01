import * as types from '../constants/ActionsTypes';

const initialState = {
    oauthToken: null,
};


const session = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                oauthToken: action.oauthToken,
            };
        case types.LOGOUT:
            return { ...initialState };

        default:
            return state;

    };
};
export default session;