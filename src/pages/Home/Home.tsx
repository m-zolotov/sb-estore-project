import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinkBehavior from '../../components/Link/LinkBehavior';
import PageHeader from '../../components/PageHeader';

const Home = () => {
	return (
		<>
			<Box>
				<Container>
					<PageHeader title={'Главная'} />
					<LinkBehavior text='Посмотреть каталог' to='/catalog' />
				</Container>
			</Box>
		</>
	);
};

export default Home;
