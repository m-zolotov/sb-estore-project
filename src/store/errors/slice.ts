import { createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material';
import { sliceName } from './constants';

type TAlertState = {
	type: AlertColor;
	text: string;
	isOpen: boolean;
	critical: boolean;
};

const initialState: TAlertState = {
	type: 'success',
	text: '',
	isOpen: false,
	critical: false,
};

const slice = createSlice({
	name: sliceName,
	initialState: initialState,
	reducers: {
		setType: (state, action) => {
			state.type = action.payload;
		},
		setText: (state, action) => {
			state.text = action.payload;
		},
		setIsOpen: (state, action) => {
			state.isOpen = action.payload;
		},
		setIsCritical: (state, action) => {
			state.critical = action.payload;
		},
	},
});

const reducer = {
	[sliceName]: slice.reducer,
};

export const { setType, setText, setIsOpen, setIsCritical } = slice.actions;

export default reducer;
