import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as apiProducts from 'api/products';
import api from '../../api/api';
import { addError } from '../errors/actions';
// import { IProduct } from '../models';

// interface IGetProductsParams {
// 	total: number;
// 	products: IProduct[];
// }

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (args, { dispatch, rejectWithValue }) => {
		try {
			const data = await api.getProductsList();
			return data;
		} catch (e) {
			const text = 'Не удалось загрузить список продуктов';
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);

export const getProduct = createAsyncThunk(
	'products/getProduct',
	async (productId: string, { dispatch, rejectWithValue }) => {
		try {
			const data = await api.getProductById(productId);
			return data;
		} catch (e) {
			const text = `Не удалось загрузить данные продукта (ID: ${productId})`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);
