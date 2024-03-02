import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { addError } from '../errors/actions';

export const getUser = createAsyncThunk(
	'user/getUser',
	async (args, { dispatch, rejectWithValue }) => {
		try {
			const data = await api.getUserInfo();
			return data;
		} catch (e) {
			const text = 'Не удалось загрузить данные о пользователе';
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);
