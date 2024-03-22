import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardsList';
import PageHeader from '../../components/PageHeader';
import { useAppSelector } from '../../store/hooks';
import { selectProducts } from '../../store/products/selectors';

const Catalog = () => {
	const products = useAppSelector(selectProducts);

	return (
		<Box>
			<Container>
				<PageHeader title={'Каталог'} />
				{products ? <CardList cards={products} /> : ''}
			</Container>
		</Box>
	);
};

export default Catalog;
