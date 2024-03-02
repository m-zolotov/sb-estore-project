import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { addError } from '../errors/actions';
import { sliceName } from './constants';
import { IUser } from '../models';

export const getUser = createAsyncThunk(
	`${sliceName}/getUser`,
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

export const editUser = createAsyncThunk(
	`${sliceName}/editUser`,
	async (
		dataUser: Pick<IUser, 'name' | 'about'>,
		{ dispatch, rejectWithValue }
	) => {
		try {
			const data = await api.setUserInfo(dataUser);
			dispatch(getUser());
			return data;
		} catch (e) {
			const text = `Не удалось изменить данные пользователя ${dataUser.name}`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);
