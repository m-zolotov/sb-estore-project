import { createSlice } from '@reduxjs/toolkit';
import { IAsyncError } from '../models';
import { getUser } from './actions';
import { sliceName } from './constants';
import { IStore } from './types';

const slice = createSlice({
	name: sliceName,
	initialState: {
		loading: false,
		error: '',
		user: {} as IStore['user'],
	},
	reducers: {},
	extraReducers: (builder) => {
		// user
		builder.addCase(getUser.pending, (state) => ({
			...state,
			loading: true,
			error: '',
		}));

		builder.addCase(getUser.fulfilled, (state, { payload }) => ({
			...state,
			loading: false,
			error: '',
			user: payload,
		}));

		builder.addCase(getUser.rejected, (state, { error }) => ({
			...state,
			loading: false,
			error: (error as IAsyncError).message || 'Rejected',
		}));
		// end of user
	},
});

const reducer = {
	[sliceName]: slice.reducer,
};

export default reducer;
