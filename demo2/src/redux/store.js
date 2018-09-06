import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as home from './reducers/homeReducer';
import * as user from './reducers/userReducer';

const store = createStore(
	combineReducers({...home,...user}), //合并reducer
	applyMiddleware(thunk)				//中间件
);
export default store;