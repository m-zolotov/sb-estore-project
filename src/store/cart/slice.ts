import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceName } from './constants';
import { IStore, TCartItem } from './types';

const slice = createSlice({
	name: sliceName,
	initialState: {
		cartItems: [] as IStore['cartItems'] | null,
		totalAmount: null,
	},
	reducers: {
		plusTotalAmount: (state, action: PayloadAction<Pick<TCartItem, '_id'>>) => {
			if (!state.cartItems) return;
			const selectedItem = state.cartItems.find(
				({ _id }) => _id === action.payload._id
			);
			if (selectedItem) {
				const totalAmount = selectedItem.totalAmount;
				const maxAvaibleAmount = selectedItem.stock;
				state.cartItems = [
					...state.cartItems.filter(({ _id }) => _id !== action.payload._id),
					{
						...selectedItem,
						totalAmount:
							totalAmount < maxAvaibleAmount ? totalAmount + 1 : totalAmount,
					},
				];
			}
		},
		minusTotalAmount: (
			state,
			action: PayloadAction<Pick<TCartItem, '_id'>>
		) => {
			if (!state.cartItems) return;
			const selectedItem = state.cartItems.find(
				({ _id }) => _id === action.payload._id
			);
			if (selectedItem) {
				const totalAmount = selectedItem.totalAmount;
				state.cartItems = [
					...state.cartItems.filter(({ _id }) => _id !== action.payload._id),
					{
						...selectedItem,
						totalAmount: totalAmount >= 1 ? totalAmount - 1 : 0,
					},
				];
			}
		},
		addItem: (state, action: PayloadAction<TCartItem>) => {
			if (state.cartItems?.find(({ _id }) => _id === action.payload._id))
				return;
			const addedItem = { ...action.payload, totalAmount: 1 };
			state.cartItems = state.cartItems
				? [...state.cartItems, addedItem]
				: [addedItem];
		},
		deleteItem: (state, action: PayloadAction<Pick<TCartItem, '_id'>>) => {
			if (!state.cartItems) return;
			state.cartItems = state.cartItems?.filter(
				({ _id }) => _id !== action.payload._id
			);
			if (state.cartItems.length === 0) state.cartItems = null;
		},
	},
});

const reducer = {
	[sliceName]: slice.reducer,
};

export const { addItem, deleteItem, plusTotalAmount, minusTotalAmount } =
	slice.actions;

export default reducer;
