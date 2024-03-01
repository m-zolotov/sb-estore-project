import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import errorsReducer from './errors/slice';
import productsReducer from './products/slice';

const reducers = {
	...errorsReducer,
	...productsReducer,
};

const store = configureStore({
	reducer: combineReducers(reducers),
});

export default store;
