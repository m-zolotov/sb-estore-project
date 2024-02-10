import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from '../../components/CardList';
import PageHeader from '../../components/PageHeader';
import { ICard } from '../../types/ICard';
import { SearchContext } from '../../context/search-context';
import data from '../../fixtures/data.json';

const Catalog = () => {
	const cards = data;
	const { search } = useContext(SearchContext);
	const [filteredData, setFilteredData] = useState<ICard[]>(data);
	useEffect(() => {
		setFilteredData(
			data.filter((card: ICard) =>
				card.name
					.toLowerCase()
					.toString()
					.includes(search.toLowerCase().toString())
			)
		);
	}, [search]);
	return (
		<Box>
			<Container>
				<PageHeader title={'Каталог'} />
				{cards.length ? <CardList cards={filteredData} /> : ''}
			</Container>
		</Box>
	);
};

export default Catalog;
