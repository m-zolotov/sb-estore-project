import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getProduct } from '../../store/products/actions';
import { selectIsLoading, selectProduct } from '../../store/products/selectors';

const Product = () => {
	const { productId } = useParams();
	const dispatch = useAppDispath();
	const product = useAppSelector(selectProduct);
	const isLoading = useAppSelector(selectIsLoading);

	useEffect(() => {
		if (productId) dispatch(getProduct(productId));
	}, [productId, dispatch]);

	return (
		<Box>
			<Container>
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						<ButtonBack />
						<PageHeader title={product?.name} />
						<Typography variant='body1' gutterBottom>
							{product?.description}
						</Typography>
					</>
				)}
			</Container>
		</Box>
	);
};

export default Product;
