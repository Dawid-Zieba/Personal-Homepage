import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../common/modeSlice";
import personalHomepageReducer from "../features/personalHomepageSlice";
import { saga } from "./saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        mode: modeReducer,
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;