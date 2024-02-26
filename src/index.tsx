import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { router } from './router';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
const theme = createTheme({
	typography: {
		fontFamily: 'Nunito, Raleway, Roboto, Arial',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
		  @font-face {
			font-family: 'Nunito';
			font-style: normal;
			font-display: swap;
			font-weight: 400;
		  }
		`,
		},
	},
});

root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
