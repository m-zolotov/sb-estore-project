import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
import { ProductContext } from '../../context/product-context';
import { IProduct } from '../../types/interfaces';
import api from '../../utils/api';

const Product = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [product, setProduct] = useState<IProduct | null>(null);
	const { productId } = useParams();

	// const [errorState, setErrorState] = useState(null);

	useEffect(() => {
		setIsLoading(true);
	}, []);

	useEffect(() => {
		if (productId)
			api
				.getProductById(productId)
				.then((response) => {
					setProduct(response);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
	}, [productId]);

	return (
		<ProductContext.Provider value={product}>
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
		</ProductContext.Provider>
	);
};

export default Product;
