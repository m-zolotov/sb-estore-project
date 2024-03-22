import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSignUpMutation } from '../../store/api/slice';
import { useAppDispatch } from '../../store/hooks';
import { setIsOpen } from '../../store/errors/slice';
import { addError } from '../../store/errors/actions';
import { IUser } from '../../store/models';
import styled from '@emotion/styled';

export type SignUpFormValues = Pick<IUser, 'email' | 'group' | 'password'>;

const signUpFormSchema = yup.object({
	email: yup.string().email().required(),
	group: yup
		.string()
		.lowercase()
		.matches(
			/ra-\d{1,4}?$/,
			'Группа должна быть в формате ra-####, где #### от 1 до 9999'
		)
		.required()
		.strict(),
	password: yup.string().min(6).max(24).required(),
});

const StyledContainer = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	width: '420px',
	padding: '16px',
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

export const SignUpForm: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [signUpRequestFn] = useSignUpMutation();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<SignUpFormValues>({
		defaultValues: {
			email: '',
			group: '',
			password: '',
		},
		resolver: yupResolver(signUpFormSchema),
	});
	function onSuccess() {
		dispatch(
			addError({
				type: 'success',
				text: 'Вы успешно зарегистрированы! Войдите в систему',
				isOpen: true,
			})
		);
		setTimeout(() => dispatch(setIsOpen(false)), 5000);
		navigate('/signin');
	}

	function onError() {
		dispatch(
			addError({
				type: 'error',
				text: 'Неизвестная ошибка при регистрации пользователя',
				isOpen: true,
			})
		);
		setTimeout(() => dispatch(setIsOpen(false)), 5000);
	}

	const submitHandler: SubmitHandler<SignUpFormValues> = async (values) => {
		let response;
		try {
			response = await signUpRequestFn(values);
			if ('data' in response) {
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
					name='group'
					control={control}
					render={({ field }) => (
						<TextField
							label='Group Id'
							type='text'
							margin='normal'
							error={!!errors.group?.message}
							helperText={errors.group?.message}
							fullWidth
							required
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
					variant='outlined'
					loading={isSubmitting}
					fullWidth
					sx={{ mt: 3, mb: 2 }}>
					Зарегистрироваться
				</StyledButton>
				<StyledButton
					type='button'
					variant='outlined'
					onClick={() => navigate('/signin')}>
					Войти
				</StyledButton>
			</Box>
		</StyledContainer>
	);
};

export default SignUpForm;
