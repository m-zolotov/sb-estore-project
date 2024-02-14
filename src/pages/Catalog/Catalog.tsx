import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardList';
import PageHeader from '../../components/PageHeader';
import { ICard } from '../../types/interfaces';
import { SearchContext } from '../../context/search-context';
import api from '../../utils/api';

const Catalog = () => {
	const { search } = useContext(SearchContext);
	const [products, setProducts] = useState<ICard[]>([]);

	useEffect(() => {
		api
			.getProductsList()
			.then((productsData) => {
				setProducts(productsData.products);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const filteredData = products.filter((card: ICard) =>
			card.name
				.toLowerCase()
				.toString()
				.includes(search.toLowerCase().toString())
		);
		setProducts(filteredData);
	}, [search]); // TODO: Исправить баг с очищением строки поиска

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
