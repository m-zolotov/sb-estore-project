import { forwardRef } from 'react';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import CountField from '../CountField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectIsLoading, selectUser } from '../../store/user/selectors';
import { selectCartItems } from '../../store/cart/selectors';
import { changeProductLike } from '../../store/products/actions';
import { addItem, deleteItem } from '../../store/cart/slice';
import { ICard } from '../../store/models';
import { colors, bg } from '../../shared/colors';
import spacing from '../../shared/spacing';
import { ReactComponent as LikeNoActive } from '../../assets/images/ic-favorites.svg';
import { ReactComponent as LikeActive } from '../../assets/images/ic-favorites-fill.svg';
import { ReactComponent as IconTrash } from '../../assets/images/ic-trash.svg';

const theme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					height: '32px',
					padding: 0,
				},
				action: {
					margin: 0,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					marginLeft: spacing(2),
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					width: '116px',
					height: '40px',
					fontSize: '16px',
					fontWeight: '700',
					borderRadius: '55px',
					backgroundColor: bg.main,
					color: colors.text.main,
					textTransform: 'none',
				},
			},
		},
	},
});

const CurrentPriceWrapper = styled('p')(() => ({
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '800',
	marginBottom: 0,
	marginTop: 0,
	color: colors.custom.red,
}));

const WeightWrapper = styled('p')(() => ({
	fontSize: '12px',
	lineHeight: '14px',
	fontWeight: '400',
	marginBottom: 0,
	marginTop: 0,
	color: colors.text.secondary,
}));

const HeadingWrapper = styled('p')(() => ({
	height: '40px',
	display: 'flex',
	alignItems: 'center',
	fontSize: '16px',
	lineHeight: '20px',
	fontWeight: '600',
	marginBottom: 0,
	marginTop: 0,
	color: colors.text.main,
}));

const FavoritesWrapper = styled('div')(() => ({
	marginRight: spacing(2),
}));

type ICardProps = {
	card: ICard;
	key?: string;
};

export default function Card({ card, key }: ICardProps) {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const cartItems = useAppSelector(selectCartItems);
	const isLoading = useAppSelector(selectIsLoading);
	const isStock = card.stock;
	const isAddedToCart = cartItems?.find((item) => item._id === card._id);

	const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
		(props, ref) => (
			<RouterLink ref={ref} to={`/product/${card._id}`} {...props} />
		)
	);

	LinkBehavior.displayName = 'LinkBehavior';

	const handleChangeLike = () => {
		dispatch(
			changeProductLike({
				productId: card._id,
				like: !card.likes.includes(user?._id),
			})
		);
	};

	const handleDeleteItem = ({ _id }: Pick<ICard, '_id'>) => {
		dispatch(deleteItem({ _id }));
	};

	const handleAddItem = (card: ICard) => {
		dispatch(addItem({ ...card, totalAmount: 1 }));
	};

	return (
		<ThemeProvider theme={theme}>
			<MuiCard elevation={0} key={key}>
				{isLoading ? null : (
					<CardHeader
						avatar={
							card.discount ? (
								<Chip label={`-${card.discount}`} color='error' />
							) : null
						}
						action={
							<FavoritesWrapper>
								<IconButton aria-label='like' onClick={handleChangeLike}>
									{card.likes.includes(user?._id) ? (
										<LikeActive />
									) : (
										<LikeNoActive />
									)}
								</IconButton>
							</FavoritesWrapper>
						}
					/>
				)}
				<CardMedia
					component='img'
					height='187'
					image={`${card.pictures}`}
					alt='dog food'
				/>
				<CardActionArea component={LinkBehavior}>
					<CardContent>
						<CurrentPriceWrapper>{`${card.price} ₽`}</CurrentPriceWrapper>
						<WeightWrapper>{card.wight}</WeightWrapper>
						<HeadingWrapper>{card.name}</HeadingWrapper>
					</CardContent>
				</CardActionArea>
				<CardActions>
					{isAddedToCart ? (
						<>
							<CountField _id={card._id} />
							<IconButton
								aria-label='delete'
								onClick={() => handleDeleteItem({ _id: card._id })}>
								<IconTrash />
							</IconButton>
						</>
					) : (
						<Button
							size='small'
							color={isStock ? 'error' : 'primary'}
							onClick={() => handleAddItem(card)}
							style={{ boxShadow: 'none' }}>
							{isStock ? 'В корзину' : 'Нет в продаже'}
						</Button>
					)}
				</CardActions>
			</MuiCard>
		</ThemeProvider>
	);
}
