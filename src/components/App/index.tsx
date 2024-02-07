import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import muiTheme from '../../styles/muiTheme';
import AppContent from '../AppContent';
// import './styles.css';
// import s from './app.module.css';
// import reactImage from './images/react.png';
// import { ReactComponent as LogoIcon } from './images/logo.svg';
// import { useState } from 'react';

// const theme = createTheme(muiTheme);

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
	// const num = 0
	// const [count, setCount] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppContent />
		</ThemeProvider>
	);
};

export default App;
