import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardsList';
import PageHeader from '../../components/PageHeader';
import { useAppSelector } from '../../store/hooks';
import { selectProducts } from '../../store/products/selectors';

const Catalog = () => {
	const products = useAppSelector(selectProducts);

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
