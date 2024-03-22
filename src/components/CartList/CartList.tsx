import Stack from '@mui/material/Stack';
import CartItem from '../CartItem';
import Skeleton from '../Skeleton';
import { TCartItem } from '../../store/cart/types';

type ICartListProps = {
	items: TCartItem[];
};

const CartList = ({ items }: ICartListProps) => {
	return (
		<Stack direction='column'>
			{items.length ? (
				items.map((item: TCartItem) => (
					<CartItem
						key={item._id}
						_id={item._id}
						name={item.name}
						pictures={item.pictures}
						stock={item.stock}
						price={item.price}
						discount={item.discount}
						totalAmount={item.totalAmount}
					/>
				))
			) : (
				<Skeleton />
			)}
		</Stack>
	);
};

export default CartList;
