import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { editUser } from '../../store/user/actions';
import { selectIsLoading, selectUser } from '../../store/user/selectors';
import { setUser, setToken } from '../../store/user/slice';

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
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	const isLoading = useAppSelector(selectIsLoading);
	const [name, setName] = useState(user.name || '');
	const [about, setAbout] = useState(user.about || '');
	const [isEditUser, setIsEditUser] = useState(false);

	const handleEdit = () => setIsEditUser(!isEditUser);

	const handleChange = () => {
		dispatch(
			editUser({
				name: name,
				about: about,
			})
		);
		setIsEditUser(!isEditUser);
	};

	const handleLogOut = () => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		navigate('/signin');
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: 'calc(100vh - 288px)',
				justifyContent: 'start',
			}}>
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
								<Button
									size='small'
									variant='outlined'
									color='primary'
									onClick={() => handleLogOut()}>
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
