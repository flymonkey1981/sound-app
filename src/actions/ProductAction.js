import * as types from "../constants/ActionsTypes";

export const addProduct = (product) => (dispatch) => {
    var products = [];
    if (window.localStorage.getItem("shoppingCart")) {


    }else{
        window.localStorage.setItem("shoppingCart",JSON.stringify(products));
    }

    var shoppingCart = JSON.parse(window.localStorage.getItem("shoppingCart"));
    shoppingCart.push(product);
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    console.log("Shopping cart is "+JSON.parse(window.localStorage.getItem("shoppingCart")).length);

    dispatch({type: types.ADD_PRODUCT, product});
};

export const viewProduct = (currentProduct, history) => (dispatch) => {
    dispatch({type: types.VIEW_PRODUCT, currentProduct});
    history.push('/productDetail');


};

export const viewShoppingCart = (shoppingCart, history) => (dispatch) => {
    dispatch({type: types.VIEW_SHOPPINGCART, shoppingCart});
    history.push('/shoppingCart');


};

export const removeProduct = (product) => (dispatch) => {
    dispatch({type: types.REMOVE_PRODUCT, product});
}