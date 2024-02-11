import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppContent from '../AppContent';
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

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppContent />
		</ThemeProvider>
	);
};

export default App;
