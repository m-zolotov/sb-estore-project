import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import spacing from '../../shared/spacing';

const theme = createTheme({
	typography: {
		fontFamily: 'Nunito, Raleway, Roboto, Arial',
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					paddingTop: spacing(2),
					paddingBottom: spacing(4),
				},
			},
		},
	},
});

type ICardListProps = {
	title: string;
};

const PageHeader = ({ title, ...props }: ICardListProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Typography component='h1' variant='h4' gutterBottom {...props}>
				{title}
			</Typography>
		</ThemeProvider>
	);
};

export default PageHeader;
