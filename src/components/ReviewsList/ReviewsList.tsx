import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Skeleton from '../Skeleton';
import { IReview } from '../../store/models';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProduct } from '../../store/products/actions';
import { selectProduct } from '../../store/products/selectors';

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
					<ListItem key={item._id}>
						<ListItemText
							primary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										{`${item.author.name} ${new Date()
											.toLocaleDateString()
											.replaceAll('/', '.')}`}
									</Typography>
								</>
							}
							secondary={
								<Typography
									sx={{ display: 'inline' }}
									component='span'
									variant='body1'
									color='text.primary'>
									{item.text}
								</Typography>
							}
						/>
					</ListItem>
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
