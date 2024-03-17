import { createSlice } from '@reduxjs/toolkit';
import { IAsyncError } from '../models';
import { editUser } from './actions';
import { sliceName } from './constants';
import { IStore } from './types';

const slice = createSlice({
	name: sliceName,
	initialState: {
		loading: false,
		error: '',
		token: '',
		user: {} as IStore['user'],
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.loading = false;
		},
		setToken: (state, action) => {
			state.token = action.payload;
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		// user
		builder.addCase(editUser.pending, (state) => ({
			...state,
			loading: true,
			error: '',
		}));

		builder.addCase(editUser.fulfilled, (state, { payload }) => ({
			...state,
			loading: false,
			error: '',
			user: payload,
		}));

		builder.addCase(editUser.rejected, (state, { error }) => ({
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

export const { setUser, setToken } = slice.actions;

export default reducer;
