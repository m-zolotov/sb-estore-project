import MuiSkeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import spacing from '../../shared/spacing';

const theme = createTheme({
	components: {
		MuiStack: {
			styleOverrides: {
				root: {
					marginBottom: spacing(2),
				},
			},
		},
	},
});

const SkeletonCartItem = () => {
	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={2}>
				<MuiSkeleton variant='rectangular' height={40} />
				<MuiSkeleton variant='rectangular' height={14} />
			</Stack>
		</ThemeProvider>
	);
};

export default SkeletonCartItem;
