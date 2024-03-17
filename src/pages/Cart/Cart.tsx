import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';

const Cart = () => {
	return (
		<Box>
			<Container>
				<ButtonBack />
				<PageHeader title={'4 товара в корзине'} />
			</Container>
		</Box>
	);
};

export default Cart;
