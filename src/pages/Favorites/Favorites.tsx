import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';

const Favorites = () => {
	return (
		<Box>
			<Container>
				<ButtonBack />
				<PageHeader title={'Избранные товары'} />
			</Container>
		</Box>
	);
};

export default Favorites;
