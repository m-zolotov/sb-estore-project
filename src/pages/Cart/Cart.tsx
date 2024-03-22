import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { useAppSelector } from '../../store/hooks';
import { selectCartItems } from '../../store/cart/selectors';
import CartList from '../../components/CartList';
import CartDetails from '../../components/CartDetails';

const Cart = () => {
	const cartItems = useAppSelector(selectCartItems);

	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: 'calc(100vh - 288px)',
			}}>
			<Container>
				<ButtonBack />
				<PageHeader
					title={
						cartItems?.length
							? `Корзина: ${cartItems.length}`
							: 'В корзине пока пусто'
					}
				/>
				<Stack direction={'row'}>
					{cartItems?.length ? (
						<Grid container>
							<Grid item xs={9}>
								<CartList items={cartItems} />
							</Grid>
							<Grid item xs={3}>
								<CartDetails />
							</Grid>
						</Grid>
					) : (
						<Typography>Загляните на главную, чтобы выбрать товары</Typography>
					)}
				</Stack>
			</Container>
		</Box>
	);
};

export default Cart;
