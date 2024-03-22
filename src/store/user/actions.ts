import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { addError } from '../errors/actions';
import { sliceName } from './constants';
import { RootState } from '../types';
import { IUser } from '../models';

export const editUser = createAsyncThunk(
	`${sliceName}/editUser`,
	async (
		dataUser: Pick<IUser, 'name' | 'about'>,
		{ dispatch, rejectWithValue, getState }
	) => {
		try {
			const data = await api((getState() as RootState).user.token).setUserInfo(
				dataUser
			);
			return data;
		} catch (e) {
			const text = `Не удалось изменить данные пользователя ${dataUser.name}`;
			dispatch(addError({ data: e, isCritical: false, text }));
			return rejectWithValue(text);
		}
	}
);
