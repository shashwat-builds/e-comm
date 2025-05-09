import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"
import axios from "axios";
function* getProducts(){
    let response= yield axios.get("http://127.0.0.1:5000/products");
    let data=response.data
    yield put({type:SET_PRODUCT_LIST, data})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts)
}

export default productSaga