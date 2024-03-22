import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { sliceName } from './constants';
import { IUserAuthResponse } from './types';
import { IUser } from '../models';
import { config } from '../../api/config';
import { SignInFormValues } from '../../components/Form/SignInForm';
import { SignUpFormValues } from '../../components/Form/SignUpForm';

export const slice = createApi({
	reducerPath: sliceName,
	baseQuery: fetchBaseQuery({
		baseUrl: config.apiUrl,
	}),
	tagTypes: ['Auth'],
	endpoints: (builder) => ({
		signIn: builder.mutation<IUserAuthResponse, SignInFormValues>({
			query: (authUser) => ({
				url: '/signin',
				method: 'POST',
				body: authUser,
			}),
		}),
		signUp: builder.mutation<IUser, SignUpFormValues>({
			query: (userAuth) => ({
				url: '/signup',
				method: 'POST',
				body: userAuth,
			}),
		}),
	}),
});

export const { useSignInMutation, useSignUpMutation } = slice;

const reducer = {
	[sliceName]: slice.reducer,
};

export default reducer;
