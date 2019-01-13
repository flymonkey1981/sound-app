import * as types from '../constants/ActionsTypes';
const initialState = {
    product: {},
    shoppingCart: [],
    currentProduct: {}
}

const product = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_PRODUCT: {
            state.shoppingCart.push(product);
            return {
                ...state,
                product: action.product,
            }
        }
        case types.VIEW_PRODUCT :
            return {
                ...state,
                currentProduct: action.currentProduct,
            }
        default:
            return state;
    }
};
export default product;