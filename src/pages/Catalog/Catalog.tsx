import { useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '../../components/Skeleton';
import CardList from '../../components/CardList';
import { GoodsContext } from '../../context/goods-context';

const Catalog = () => {
	const cards = useContext(GoodsContext);

	return (
		<Box>
			<Container>
				{cards.length ? (
					<CardList cards={cards} />
				) : (
					<Grid container spacing={2}>
						<Grid item md={3}>
							<Skeleton />
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	);
};

export default Catalog;
