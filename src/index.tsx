import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import App from './components/App';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<CssBaseline />
		<App />
	</StrictMode>
);
