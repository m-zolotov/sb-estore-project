import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getUser, editUser } from '../../store/user/actions';
import { selectIsLoading, selectUser } from '../../store/user/selectors';

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: '116px',
					height: '40px',
					fontSize: '16px',
				},
			},
		},
		MuiStack: {
			styleOverrides: {
				root: {
					marginBottom: '40px',
				},
			},
		},
	},
});

const Profile = () => {
	const dispatch = useAppDispath();
	const user = useAppSelector(selectUser);
	const isLoading = useAppSelector(selectIsLoading);
	const [name, setName] = useState(user.name || '');
	const [about, setAbout] = useState(user.about || '');
	const [isEditUser, setIsEditUser] = useState(false);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	const handleEdit = () => setIsEditUser(!isEditUser);

	const handleChange = () => {
		console.log({ name: name, about: about });
		dispatch(
			editUser({
				name: name,
				about: about,
			})
		);
		setIsEditUser(!isEditUser);
	};

	return (
		<Box>
			<Container>
				{isLoading ? (
					<CircularProgress />
				) : isEditUser ? (
					<>
						<ButtonBack />
						<PageHeader title={'Мои данные'} />
						<Box
							component='form'
							sx={{
								'& > :not(style)': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete='off'>
							<ThemeProvider theme={theme}>
								<Stack spacing={2}>
									<TextField
										id='name'
										value={name}
										label='Моё имя'
										variant='outlined'
										size='small'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setName(e.target.value);
										}}
									/>
									<TextField
										id='email'
										value={about}
										label='Обо мне'
										variant='outlined'
										size='small'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setAbout(e.target.value);
										}}
									/>
									<Button
										size='small'
										variant='outlined'
										color='primary'
										onClick={() => handleChange()}>
										Сохранить
									</Button>
									<Button
										size='small'
										variant='outlined'
										color='primary'
										onClick={() => handleEdit()}>
										Отменить
									</Button>
								</Stack>
							</ThemeProvider>
						</Box>
					</>
				) : (
					<>
						<ButtonBack />
						<PageHeader title={'Профиль'} />
						<Typography variant='body1' gutterBottom>
							{user?.name}
						</Typography>
						<Typography variant='body1' gutterBottom>
							{user?.email}
						</Typography>
						<ThemeProvider theme={theme}>
							<Stack spacing={2}>
								<Button
									size='small'
									variant='outlined'
									color='primary'
									onClick={() => handleEdit()}>
									Изменить
								</Button>
								<Button size='small' variant='outlined' color='primary'>
									Выйти
								</Button>
							</Stack>
						</ThemeProvider>
					</>
				)}
			</Container>
		</Box>
	);
};

export default Profile;
