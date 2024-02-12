import { ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Card from '../Card';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { ICard } from '../../types/interfaces';
import usePagination from '../../hooks/usePagination';

type ICardListProps = {
	cards: ICard[];
};

const CardList = ({ cards }: ICardListProps) => {
	const PER_PAGE = 8;
	const { currentPage, countPage, getCurrentData, setPagePaginate } =
		usePagination<ICard>(cards, PER_PAGE);
	const hadlePageChange = (e: ChangeEvent<unknown>, selectPage: number) => {
		setPagePaginate(selectPage);
	};
	return (
		<>
			<Grid container spacing={2}>
				{cards.length ? (
					getCurrentData().map((item: ICard) => (
						<>
							<Grid
								item
								sx={{ display: 'flex' }}
								xs={12}
								sm={6}
								md={4}
								lg={3}
								key={item._id}>
								<Card card={item} />
							</Grid>
						</>
					))
				) : (
					<Grid container spacing={2}>
						<Grid item md={3}>
							<Skeleton />
						</Grid>
					</Grid>
				)}
			</Grid>
			<Pagination
				count={countPage}
				page={currentPage}
				onChange={hadlePageChange}
			/>
		</>
	);
};

export default CardList;
