import { createSlice } from '@reduxjs/toolkit';

import { addError } from './actions';
import { sliceName } from './constants';
import { IStore } from './types';

const slice = createSlice({
	name: sliceName,
	initialState: {
		critical: null as IStore['critical'],
		list: [] as IStore['list'],
	},
	reducers: {
		shiftError(state: IStore) {
			state.list.shift();
		},
		clear(state: IStore) {
			state.critical = null;
			state.list = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addError, (state: IStore, { payload }) => {
			const { isCritical } = payload;

			if (isCritical) {
				state.critical = state.critical || payload;
			} else {
				state.list.push(payload);
			}
		});
	},
});

const reducer = {
	[sliceName]: slice.reducer,
};

export const { shiftError, clear } = slice.actions;

export default reducer;
