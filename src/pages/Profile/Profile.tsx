import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { IUser } from '../../store/models';
import api from '../../api/api';

const Profile = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<IUser | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		api
			.getUserInfo()
			.then((response) => {
				setUser(response);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Box>
			<Container>
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						<ButtonBack />
						<PageHeader title={'Мои данные'} />
						<Typography variant='body1' gutterBottom>
							{user?.name}
						</Typography>
						<Typography variant='body1' gutterBottom>
							{user?.email}
						</Typography>
					</>
				)}
			</Container>
		</Box>
	);
};

export default Profile;
