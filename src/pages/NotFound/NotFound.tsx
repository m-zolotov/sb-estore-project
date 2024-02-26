import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinkBehavior from '../../components/Link/LinkBehavior';
import PageHeader from '../../components/PageHeader';

const NotFound = () => {
	return (
		<>
			<Box>
				<Container>
					<PageHeader title={'Страница не найдена'} />
					<LinkBehavior text='Перейти на главную' to='/' />
				</Container>
			</Box>
		</>
	);
};

export default NotFound;
