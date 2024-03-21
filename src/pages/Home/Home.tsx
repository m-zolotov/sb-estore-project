import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardsList';
import PageHeader from '../../components/PageHeader';
import { useAppSelector } from '../../store/hooks';
import { selectProducts } from '../../store/products/selectors';

const Home = () => {
	const products = useAppSelector(selectProducts);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: 'calc(100vh - 288px)',
					justifyContent: 'start',
				}}>
				<Container>
					<PageHeader title={'Главная'} />
					{products ? <CardList cards={products} /> : ''}
				</Container>
			</Box>
		</>
	);
};

export default Home;
