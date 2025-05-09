import { ADD_TO_CART, REMOVE_FROM_CART,SET_CART, CART_LIST } from "./constant"

export const setCart = (data) => ({
    type: SET_CART,
    data,
  });
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const cartList =()=>{ 
    return {
        type:CART_LIST,
    }
}


