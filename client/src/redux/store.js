import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
import cartSaga from "./cartSaga";

const sagaMiddlware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddlware)
})

sagaMiddlware.run(productSaga)
sagaMiddlware.run(cartSaga)

export default store