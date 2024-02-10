import Grid from '@mui/material/Grid';
import Card from '../Card';
import Skeleton from '../../components/Skeleton';
import { ICard } from '../../types/ICard';

type ICardListProps = {
	cards: ICard[];
};

const CardList = ({ cards }: ICardListProps) => {
	return (
		<Grid container spacing={2}>
			{cards.length ? (
				cards.map((item: ICard) => (
					<Grid item md={3} key={item._id}>
						<Card card={item} />
					</Grid>
				))
			) : (
				<Grid container spacing={2}>
					<Grid item md={3}>
						<Skeleton />
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

export default CardList;
