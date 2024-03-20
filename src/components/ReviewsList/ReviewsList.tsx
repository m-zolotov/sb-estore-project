import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Skeleton from '../Skeleton';
import { IReview } from '../../store/models';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProduct } from '../../store/products/actions';
import { selectProduct } from '../../store/products/selectors';
import Review from '../Review';

interface IReviewsListProps {
	productId: string;
}

const ReviewsList = ({ productId }: IReviewsListProps) => {
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectProduct);

	useEffect(() => {
		if (productId !== product._id) dispatch(getProduct(product._id));
	}, [productId, product._id, dispatch]);

	return (
		<List>
			{product.reviews.length ? (
				product.reviews.map((item: IReview) => (
					<Review item={item} key={item._id} />
				))
			) : (
				<ListItem>
					<Skeleton />
				</ListItem>
			)}
		</List>
	);
};

export default ReviewsList;
