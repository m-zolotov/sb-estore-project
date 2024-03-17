import { Outlet } from 'react-router-dom';
import { withProtection } from '../../hocs/withProtection';
import Box from '@mui/material/Box';
import Header from './Header';
import Alert from './Alert';
import Footer from './Footer';

const App = withProtection(() => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Header />
			<Alert />
			<Outlet />
			<Footer />
		</Box>
	);
});

export default App;
