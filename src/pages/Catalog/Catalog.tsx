import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardList';
import PageHeader from '../../components/PageHeader';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/products/actions';
import { selectProducts } from '../../store/products/selectors';

const Catalog = () => {
	const dispatch = useAppDispath();
	const products = useAppSelector(selectProducts);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	// const [products, setProducts] = useState<ICard[]>([]);

	// useEffect(() => {
	// 	const filteredData = products.filter((card: ICard) =>
	// 		card.name
	// 			.toLowerCase()
	// 			.toString()
	// 			.includes(search.toLowerCase().toString())
	// 	);
	// 	setProducts(filteredData);
	// }, []); // TODO: Исправить баг с очищением строки поиска

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
