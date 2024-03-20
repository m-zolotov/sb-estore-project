import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CountField from '../../components/CountField';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import ReviewsList from '../../components/ReviewsList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProduct, postReview } from '../../store/products/actions';
import { selectIsLoading, selectProduct } from '../../store/products/selectors';
import { selectCartItems } from '../../store/cart/selectors';
import { addItem, deleteItem } from '../../store/cart/slice';
import { ICard } from '../../store/models';
import { ReactComponent as IconTrash } from '../../assets/images/ic-trash.svg';
import { colors, bg } from '../../shared/colors';

const theme = createTheme({
	components: {
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

const Product = () => {
	const { productId } = useParams();
	const [writeReview, setWriteReview] = useState(false);
	const [reviewText, setReviewText] = useState('');
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectProduct);
	const isLoading = useAppSelector(selectIsLoading);
	const cartItems = useAppSelector(selectCartItems);
	const isStock = product.stock;
	const isAddedToCart = cartItems?.find((item) => item._id === product._id);

	useEffect(() => {
		if (productId) dispatch(getProduct(productId));
	}, [productId, dispatch]);

	const handlePostReview = () => {
		if (productId)
			dispatch(postReview({ productId: productId, text: reviewText }));
		setWriteReview(!writeReview);
	};

	const handleDeleteItem = ({ _id }: Pick<ICard, '_id'>) => {
		dispatch(deleteItem({ _id }));
	};

	const handleAddItem = (card: ICard) => {
		dispatch(addItem({ ...card, totalAmount: 1 }));
	};

	return (
		<Box>
			<Container>
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						{writeReview ? (
							<>
								<Button onClick={() => setWriteReview(!writeReview)}>
									Назад
								</Button>
								<PageHeader
									title={`Написать отзыв на продукт ${product?.name}`}
								/>
								<ThemeProvider theme={theme}>
									<Stack spacing={2}>
										<TextField
											multiline
											value={reviewText}
											onChange={(event) => setReviewText(event.target.value)}
										/>
										<Button onClick={() => handlePostReview()}>
											Отправить
										</Button>
									</Stack>
								</ThemeProvider>
							</>
						) : (
							<>
								<ButtonBack />
								<PageHeader title={product?.name} />
								<Grid container spacing={4}>
									<Grid item xs={4}>
										<img
											src={product.pictures}
											alt={product.name}
											style={{
												maxWidth: '100%',
												height: 'auto',
												padding: 0,
												margin: 0,
											}}
										/>
									</Grid>
									<Grid item xs={8}>
										<Typography variant='h5' gutterBottom>
											Описание
										</Typography>
										<Typography>Рейтинг</Typography>
										<Rating name='read-only' value={4} readOnly />
										<Typography variant='body1' gutterBottom>
											{product?.description}
										</Typography>
										{isAddedToCart ? (
											<Stack
												direction='row'
												spacing={2}
												style={{ marginTop: '16px' }}>
												<CountField _id={product._id} />
												<IconButton
													aria-label='delete'
													onClick={() =>
														handleDeleteItem({ _id: product._id })
													}>
													<IconTrash />
												</IconButton>
											</Stack>
										) : (
											<Button
												size='large'
												variant='contained'
												color={isStock ? 'error' : 'primary'}
												onClick={() => handleAddItem(product)}
												style={{ boxShadow: 'none', marginTop: 16 }}>
												{isStock ? 'В корзину' : 'Нет в продаже'}
											</Button>
										)}
									</Grid>
									<Grid item xs={8}>
										<Stack direction='row' spacing={10}>
											<Typography variant='h5' gutterBottom>
												{`Отзывы ${
													product.reviews.length ? product.reviews.length : ''
												}`}
											</Typography>
											<Button
												size='small'
												color='primary'
												variant='contained'
												onClick={() => setWriteReview(!writeReview)}
												style={{ boxShadow: 'none' }}>
												Написать отзыв
											</Button>
										</Stack>
										{product?._id && <ReviewsList productId={product?._id} />}
									</Grid>
								</Grid>
							</>
						)}
					</>
				)}
			</Container>
		</Box>
	);
};

export default Product;
