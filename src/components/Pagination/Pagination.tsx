import MuiPagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import spacing from '../../shared/spacing';

const theme = createTheme({
	components: {
		MuiPagination: {
			styleOverrides: {
				root: {
					paddingTop: spacing(2),
					paddingBottom: spacing(2),
				},
			},
		},
	},
});

const Pagination = ({ ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<MuiPagination {...props} />
		</ThemeProvider>
	);
};

export default Pagination;
