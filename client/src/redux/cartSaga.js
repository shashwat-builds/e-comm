import { put, takeEvery } from "redux-saga/effects";
import { CART_LIST, SET_CART } from "./constant";
import axios from "axios";
function* getCart(){
    let response= yield axios.get("http://localhost:5000/cart");
    let data=response.data.flatMap(item => Array(item.quantity).fill(item.id));
    console.warn("SC Action called",data)
    yield put({type:SET_CART, data})
}

function* cartSaga() {
    yield takeEvery(CART_LIST, getCart);
}

export default cartSaga;