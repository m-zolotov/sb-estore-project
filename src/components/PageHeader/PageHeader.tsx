import Typography from '@mui/material/Typography';

type ICardListProps = {
	title: string;
};

const PageHeader = ({ title, ...props }: ICardListProps) => {
	return (
		<Typography component='h1' variant='h4' gutterBottom {...props}>
			{title}
		</Typography>
	);
};

export default PageHeader;
