import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import apiReducer, { slice } from './api/slice';
import errorsReducer from './errors/slice';
import productsReducer from './products/slice';
import userReducer from './user/slice';

const reducers = {
	...apiReducer,
	...errorsReducer,
	...productsReducer,
	...userReducer,
};

const store = configureStore({
	reducer: combineReducers(reducers),
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([slice.middleware]),
});

export default store;
