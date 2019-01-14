import * as types from '../constants/ActionsTypes';
const initialState = {
    product: {},
    shoppingCart: [],
    currentProduct: {}
}

const product = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT: {
            state.shoppingCart.push(action.product);
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
        case types.VIEW_SHOPPINGCART :
            return {
                ...state,

            }
        case types.REMOVE_PRODUCT : {
            state.shoppingCart.splice( state.shoppingCart.indexOf(action.product), 1 );
            return {
                ...state,

            }
         }
        case types.CHECKOUT : {
            return {
                ...state,

            }
        }
        case types.UPDATE_QTY : {
            let qant = action.qant;
            state.shoppingCart = Object.assign([], state.shoppingCart.map(product => {
                    if (product.name === qant.name) {
                        product.qty = Number(product.qty)+ Number(qant.qty);
                    }
                    return product;
                }
            ));
            return {
                ...state,

            }
        }
        default:
            return state;
    }
};
export default product;