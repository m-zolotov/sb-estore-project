import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import ReviewsList from '../../components/ReviewsList';
// import Textarea from '../../components/Textarea';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getProduct, postReview } from '../../store/products/actions';
import { selectIsLoading, selectProduct } from '../../store/products/selectors';
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
	const dispatch = useAppDispath();
	const product = useAppSelector(selectProduct);
	const isLoading = useAppSelector(selectIsLoading);

	useEffect(() => {
		if (productId) dispatch(getProduct(productId));
	}, [productId, dispatch]);

	const handlePostReview = () => {
		if (productId)
			dispatch(postReview({ productId: productId, text: reviewText }));
		setWriteReview(!writeReview);
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
								<Typography variant='h6' gutterBottom>
									Описание
								</Typography>
								<Typography variant='body1' gutterBottom>
									{product?.description}
								</Typography>
								<Typography variant='h5' gutterBottom>
									Отзывы
								</Typography>
								<Button
									size='small'
									color='primary'
									variant='outlined'
									onClick={() => setWriteReview(!writeReview)}>
									Написать отзыв
								</Button>
								{product?._id && <ReviewsList productId={product?._id} />}
							</>
						)}
					</>
				)}
			</Container>
		</Box>
	);
};

export default Product;
