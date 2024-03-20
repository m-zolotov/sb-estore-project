import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { IReview } from '../../store/models';

interface IReviewsListProps {
	item: IReview;
	key: string;
}

const Review = ({ item, key }: IReviewsListProps) => {
	return (
		<ListItem key={key}>
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
	);
};

export default Review;
