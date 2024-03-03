import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonBack from '../../components/Button/ButtonBack';
import FavoritesCardList from '../../components/CardList/FavoritesCardList';
import PageHeader from '../../components/PageHeader';
import { useAppSelector } from '../../store/hooks';
import { selectProducts } from '../../store/products/selectors';
import { selectUser } from '../../store/user/selectors';

const Favorites = () => {
	const products = useAppSelector(selectProducts);
	const user = useAppSelector(selectUser);
	const favoritesProducts = products.filter((item) =>
		item.likes.includes(user ? user._id : '')
	);

	return (
		<Box>
			<Container>
				<ButtonBack />
				<PageHeader title={'Избранные товары'} />
				{products ? <FavoritesCardList cards={favoritesProducts} /> : ''}
			</Container>
		</Box>
	);
};

export default Favorites;
