// import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ICard } from '../../types/ICard';
import Card from '../Card';

type ICardListProps = {
	cards: ICard[];
	key?: string;
};

const CardList = ({ cards }: ICardListProps) => {
	// const [query, setQuery] = useState('');
	console.log('---', cards);
	return (
		<Grid container spacing={2}>
			{cards
				? cards
						//.filter((item) => item.name.toLowerCase().includes(query))
						.map((item: ICard) => (
							<Grid item md={3} key={item._id}>
								<Card card={item} />
							</Grid>
						))
				: ''}
		</Grid>
	);
};

export default CardList;
