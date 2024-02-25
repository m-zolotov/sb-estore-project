import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { ProfileContext } from '../../context/profile-context';
import { IUser } from '../../types/interfaces';
import api from '../../utils/api';

const Profile = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<IUser | null>(null);

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
		<ProfileContext.Provider value={user}>
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
		</ProfileContext.Provider>
	);
};

export default Profile;
