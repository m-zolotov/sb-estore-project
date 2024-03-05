import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { addError } from '../errors/actions';
import { sliceName } from './constants';

export interface IChangeProductLikeProps {
	productId: string;
	like: boolean;
}

export interface IDeleteProductProps {
	productId: string;
	text: string;
}

export const getProducts = createAsyncThunk(
	`${sliceName}/getProducts`,
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
	`${sliceName}/getProduct`,
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

export const deleteProduct = createAsyncThunk(
	`${sliceName}/deleteProduct`,
	async (productId: string, { dispatch, rejectWithValue }) => {
		try {
			const data = await api.deleteProductById(productId);
			return data;
		} catch (e) {
			const text = `Не удалось удалить продукт (ID: ${productId})`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);

export const changeProductLike = createAsyncThunk(
	`${sliceName}/changeProductLike`,
	async (args: IChangeProductLikeProps, { dispatch, rejectWithValue }) => {
		const { productId, like } = args;
		try {
			const data = await api.changeProductLike(productId, like);
			dispatch(getProducts());
			return data;
		} catch (e) {
			const text = `Не удалось ${
				like ? 'удалить' : 'добавить'
			} лайк продукту (ID: ${productId})`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);

export const postReview = createAsyncThunk(
	`${sliceName}/postReview`,
	async (args: IDeleteProductProps, { dispatch, rejectWithValue }) => {
		const { productId, text } = args;
		try {
			const data = await api.postReviewById({ productId, text });
			dispatch(getProduct(productId));
			return data;
		} catch (e) {
			const text = `Не удалось добавить отзыв к продукту (ID: ${productId})`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);
