import * as types from '../constants/ActionsTypes';
const initialState = {
    product: {},
    shoppingCart: []
}

const product = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_PRODUCT:
            return {
                ...state,
                product: action.product,
                shoppingCart: state.shoppingCart.push(product)
            }
        default:
            return state;
    }
};
export default product;