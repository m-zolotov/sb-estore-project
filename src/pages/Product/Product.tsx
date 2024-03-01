import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PageHeader from '../../components/PageHeader';
import ButtonBack from '../../components/Button/ButtonBack';
// import { IProduct } from '../../store/models';

import { useAppDispath, useAppSelector } from '../../store/hooks';
import { getProduct } from '../../store/products/actions';
import { selectIsLoading, selectProduct } from '../../store/products/selectors';

const Product = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const [errorState, setErrorState] = useState(null);
	// const dispatch = useDispatch();
	// const [product, setProduct] = useState<IProduct | null>(null);
	const { productId } = useParams();
	const dispatch = useAppDispath();
	const product = useAppSelector(selectProduct);
	const isLoading = useAppSelector(selectIsLoading);

	// useEffect(() => {
	// 	setIsLoading(true);
	// }, []); переписать на состояние из стора

	useEffect(() => {
		if (productId) dispatch(getProduct(productId));
		// 	if (productId)
		// dispatch(getProduct(productId)).then((response) => {
		// 	setProduct(response);
		// 	// setIsLoading(false); переписать на состояние из стора
		// });
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
