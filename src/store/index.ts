import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './reducers';

const reducers = {
	// ...errorsReducer,
};

const store = configureStore({
	reducer: combineReducers(reducers),
});

export default store;
