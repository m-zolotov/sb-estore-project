import MuiPagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import spacing from '../../shared/spacing';

const theme = createTheme({
	components: {
		MuiPagination: {
			styleOverrides: {
				root: {
					paddingTop: spacing(4),
					paddingBottom: spacing(6),
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
