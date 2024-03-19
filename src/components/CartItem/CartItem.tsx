import { TCartItem } from '../../store/cart/types';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CountField from '../CountField';
import { ReactComponent as IconTrash } from '../../assets/images/ic-trash.svg';
import { useAppDispatch } from '../../store/hooks';
import { deleteItem } from '../../store/cart/slice';
import { ICard } from '../../store/models';

const CartItem = ({
	_id,
	name,
	pictures,
	stock,
	price,
	discount,
	totalAmount,
}: TCartItem) => {
	const dispatch = useAppDispatch();

	const handleDeleteItem = ({ _id }: Pick<ICard, '_id'>) => {
		dispatch(deleteItem({ _id }));
	};

	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='space-between'
			mr={6}>
			<img width='62px' height='62px' src={pictures} alt='Product' />
			<Stack direction={'column'} justifyContent={'space-between'}>
				<Typography width={244} variant='body1'>
					{name}
				</Typography>
				<Typography width={244} variant='body2'>
					{stock}
				</Typography>
			</Stack>
			<Stack direction={'column'} justifyContent={'space-between'}>
				<Typography width={92}>{`${price} ₽`}</Typography>
			</Stack>
			{discount}
			{totalAmount}
			<CountField _id={_id} />
			<IconButton
				aria-label='delete'
				onClick={() => handleDeleteItem({ _id: _id })}>
				<IconTrash />
			</IconButton>
		</Stack>
	);
};

export default CartItem;
