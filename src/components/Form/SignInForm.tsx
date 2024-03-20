import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSignInMutation } from '../../store/api/slice';
import { useAppDispatch } from '../../store/hooks';
import { setType, setText, setIsOpen } from '../../store/errors/slice';
import { IUser } from '../../store/models';
import { setUser, setToken } from '../../store/user/slice';
import styled from '@emotion/styled';

export type SignInFormValues = Pick<IUser, 'email' | 'password'>;

const signInFormSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(6).max(24).required(),
});

const StyledContainer = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '420px',
	borderRadius: '20px',
	background: '#FFFFFF',
	margin: '0 auto',
}));

const StyledButton = styled(LoadingButton)(() => ({
	display: 'flex',
	alignSelf: 'center',
	marginTop: '16px',
	width: '388px',
	height: '48px',
}));

export const SignInForm: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [signInRequestFn] = useSignInMutation();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<SignInFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(signInFormSchema),
	});
	function onSuccess() {
		dispatch(setType('success'));
		dispatch(setText('Вы успешно аутентифицированы в системе'));
		dispatch(setIsOpen(true));
		setTimeout(() => dispatch(setIsOpen(false)), 5000);
		navigate(location.state);
	}

	function onError() {
		dispatch(setType('error'));
		dispatch(setText('Неизвестная ошибка при аутентификации пользователя'));
		dispatch(setIsOpen(true));
		setTimeout(() => dispatch(setIsOpen(false)), 5000);
	}

	const submitHandler: SubmitHandler<SignInFormValues> = async (values) => {
		let response;
		try {
			response = await signInRequestFn(values);
			if ('data' in response) {
				dispatch(setUser(response.data.data));
				dispatch(setToken(response.data.token));
				navigate('/products');

				onSuccess();
			} else if ('error' in response) {
				onError();
			}
		} catch (error) {
			onError();
		}
	};

	return (
		<StyledContainer>
			<Box
				component='form'
				onSubmit={handleSubmit(submitHandler)}
				noValidate
				sx={{ mt: 1 }}>
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<TextField
							margin='normal'
							label='Email Address'
							type='email'
							fullWidth
							required
							autoComplete='email'
							error={!!errors.email?.message}
							helperText={errors.email?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<TextField
							label='Password'
							type='password'
							error={!!errors.password?.message}
							helperText={errors.password?.message}
							margin='normal'
							fullWidth
							required
							{...field}
						/>
					)}
				/>
				<StyledButton
					type='submit'
					disabled={isSubmitted && (!isValid || isSubmitting)}
					loading={isSubmitting}
					fullWidth
					variant='outlined'
					sx={{ mt: 3, mb: 2 }}>
					Войти
				</StyledButton>
				<StyledButton
					type='button'
					variant='outlined'
					onClick={() => navigate('/signup')}>
					Регистрация
				</StyledButton>
			</Box>
		</StyledContainer>
	);
};

export default SignInForm;
