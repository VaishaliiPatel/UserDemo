import { createStore ,applyMiddleware} from "redux";
import userReducer from "./User/reducer";
import CreateSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import watcherUserData from './User/sagas'

const sagaMiddleware = CreateSagaMiddleware();
const loggerMiddleware = createLogger();
export type AppState = ReturnType<typeof userReducer>
const store =  createStore(userReducer,applyMiddleware(loggerMiddleware,sagaMiddleware));
sagaMiddleware.run(watcherUserData);
export default store;