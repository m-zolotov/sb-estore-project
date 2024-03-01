import { createSlice } from '@reduxjs/toolkit';

import { IAsyncError } from '../models';
import { getProducts, getProduct } from './actions';
import { sliceName } from './constants';
import { IStore } from './types';

const slice = createSlice({
	name: sliceName,
	initialState: {
		loading: false,
		error: '',
		product: {} as IStore['product'],
		products: [] as IStore['products'],
		// clusterMap: {} as IStore['clusterMap'],
	},
	reducers: {},
	extraReducers: (builder) => {
		// // list
		// builder.addCase(getProducts.pending, (state) => ({
		// 	...state,
		// 	loading: true,
		// 	error: '',
		// }));

		// builder.addCase(getProducts.fulfilled, (state, { payload }) => {
		// 	return {
		// 		...state,
		// 		loading: false,
		// 		error: '',
		// 		products: payload,
		// 	};
		// });

		// builder.addCase(getProducts.rejected, (state, { error }) => ({
		// 	...state,
		// 	loading: false,
		// 	error: (error as IAsyncError).message || 'Rejected',
		// 	products: [],
		// }));
		// // end of list

		// list
		// builder.addCase(getProducts.pending, (state) => ({
		// 	...state,
		// 	loading: true,
		// 	error: '',
		// }));

		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.products = payload.products;
		});

		// builder.addCase(getProducts.rejected, (state, { error }) => ({
		// 	...state,
		// 	loading: false,
		// 	error: (error as IAsyncError).message || 'Rejected',
		// 	products: [],
		// }));
		// ...state,
		// 		loading: false,
		// 		error: '',
		// 		products: payload,
		// end of list

		// one
		builder.addCase(getProduct.pending, (state) => ({
			...state,
			loading: true,
			error: '',
		}));

		builder.addCase(getProduct.fulfilled, (state, { payload }) => ({
			...state,
			loading: false,
			error: '',
			product: payload,
		}));

		builder.addCase(getProduct.rejected, (state, { error }) => ({
			...state,
			loading: false,
			error: (error as IAsyncError).message || 'Rejected',
		}));
		// end of one
	},
});

const reducer = {
	[sliceName]: slice.reducer,
};

export default reducer;
