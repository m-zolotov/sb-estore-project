import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getUser } from '../../store/user/actions';
import { selectIsLoading, selectUser } from '../../store/user/selectors';

const Profile = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const [user, setUser] = useState<IUser | null>(null);
	const dispatch = useAppDispath();
	const user = useAppSelector(selectUser);
	const isLoading = useAppSelector(selectIsLoading);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	return (
		<Box>
			<Container>
				{isLoading ? (
					<CircularProgress />
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
						<Button size='small' variant='outlined' color='primary'>
							Изменить
						</Button>
						<Button size='small' variant='outlined' color='primary'>
							Выйти
						</Button>
					</>
				)}
			</Container>
		</Box>
	);
};

export default Profile;
