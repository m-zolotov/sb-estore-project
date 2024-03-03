import { ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import FavoritesCard from '../Card/FavoritesCard';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { ICard } from '../../store/models';
import usePagination from '../../hooks/usePagination';

type IFavoritesCardListProps = {
	cards: ICard[];
};

const FavoritesCardList = ({ cards }: IFavoritesCardListProps) => {
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
						<Grid
							item
							key={item._id}
							sx={{ display: 'flex' }}
							xs={12}
							sm={6}
							md={4}
							lg={3}>
							<FavoritesCard card={item} />
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
			<Pagination
				count={countPage}
				page={currentPage}
				onChange={hadlePageChange}
			/>
		</>
	);
};

export default FavoritesCardList;
