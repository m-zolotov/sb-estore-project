import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { minusTotalAmount, plusTotalAmount } from '../../store/cart/slice';
import { TCartItem } from '../../store/cart/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCartItems } from '../../store/cart/selectors';

type TAmountSelector = Pick<TCartItem, '_id'>;

const StyledContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection: 'row',
	width: '110px',
	height: '36px',
	padding: '8px',
	border: '1px solid #CFD8DC',
}));

const CountField = ({ _id }: TAmountSelector) => {
	const dispatch = useAppDispatch();
	const cartProducts = useAppSelector(selectCartItems);
	const purchaseAmount = cartProducts
		? cartProducts.find((product) => product._id === _id)?.totalAmount
		: 0;

	return (
		<StyledContainer>
			<IconButton onClick={() => dispatch(minusTotalAmount({ _id }))}>
				<RemoveIcon />
			</IconButton>
			<Typography>{purchaseAmount}</Typography>
			<IconButton onClick={() => dispatch(plusTotalAmount({ _id }))}>
				<AddIcon />
			</IconButton>
		</StyledContainer>
	);
};

export default CountField;
