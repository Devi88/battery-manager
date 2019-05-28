import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {reducer} from "../reducres/RootReducer";
import {rootSaga} from "../saga/saga-root";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;