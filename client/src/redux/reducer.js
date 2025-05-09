import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from "./constant"
import axios from "axios"
export const cartData = (data=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            axios.post("http://localhost:5000/cart",{
                    "product_id": action.data,
                    "quantity": 1
            })
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log(action.data.id);
            const index = data.findIndex(id => id === action.data.id);
            if (index !== -1) {
                const updatedData= [...data.slice(0, index), ...data.slice(index + 1)];
                axios.delete("http://localhost:5000/cart", {
                    data: { "product_id": action.data.id } // Pass the product_id in the body
                });
                return updatedData;
            }
            
        case SET_CART:
            console.log("cart called");
            return [...action.data]
        default:
            return data
    }
}