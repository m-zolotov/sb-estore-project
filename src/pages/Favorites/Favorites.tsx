import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PageHeader from '../../components/PageHeader';

const Favorites = () => {
	return (
		<>
			<Box>
				<Container>
					<Button>Назад</Button>
					<PageHeader title={'Favorites'} />
				</Container>
			</Box>
		</>
	);
};

export default Favorites;
