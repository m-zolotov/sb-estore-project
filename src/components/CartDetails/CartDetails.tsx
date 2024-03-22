import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../store/hooks';
import { selectCartItems } from '../../store/cart/selectors';

const CartDetails = () => {
	const cartItems = useAppSelector(selectCartItems);
	const price =
		cartItems?.reduce((acc, curr) => acc + curr.price * curr.totalAmount, 0) ||
		0;
	const discount =
		cartItems?.reduce(
			(acc, curr) =>
				acc + curr.price * curr.totalAmount * (curr.discount / 100),
			0
		) || 0;

	return (
		<>
			{cartItems && (
				<Box>
					<Typography variant='h6' fontWeight={'bold'}>
						Ваша корзина
					</Typography>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						sx={{ paddingTop: 2, paddingBottom: 2 }}>
						<Typography variant='body2'>
							{`Товары (${cartItems?.length})`}
						</Typography>
						<Typography variant='body2'>{`${price} ₽`}</Typography>
					</Stack>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						sx={{ paddingTop: 2, paddingBottom: 2 }}>
						<Typography variant='body2'>Скидка</Typography>
						<Typography variant='body2'>{`- ${discount} ₽`}</Typography>
					</Stack>
					<Divider />
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						style={{ marginBottom: '12px' }}
						sx={{ paddingTop: 2, paddingBottom: 2 }}>
						<Typography variant='body1' fontWeight={'bold'}>
							Общая стоимость
						</Typography>
						<Typography variant='body1' fontWeight={'bold'}>
							{`${price - discount} ₽`}
						</Typography>
					</Stack>
					<Button
						variant='contained'
						fullWidth
						color='error'
						size='large'
						style={{ boxShadow: 'none' }}>
						Оформить заказ
					</Button>
				</Box>
			)}
		</>
	);
};

export default CartDetails;
