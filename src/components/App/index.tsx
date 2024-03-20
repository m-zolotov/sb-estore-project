import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { withProtection } from '../../hocs/withProtection';
import Header from './Header';
import Alert from './Alert';
import Footer from './Footer';

const App = withProtection(() => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				justifyContent: 'start',
			}}>
			<Header />
			<Alert />
			<Outlet />
			<Footer />
		</Box>
	);
});

export default App;
