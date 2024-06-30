import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./slices/musicSlice";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./rootSaga";
const sagaMiddleware=createSagaMiddleware();
export const store =configureStore({
    reducer:{
        musics:musicSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);