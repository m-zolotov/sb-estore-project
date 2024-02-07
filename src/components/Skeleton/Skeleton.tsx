import MuiSkeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import spacing from '../../shared/spacing';

const SkeletonButtonWrapper = styled('div')(() => ({
	'& span': {
		borderRadius: '55px',
	},
}));

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

const Skeleton = () => {
	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={2}>
				<MuiSkeleton variant='rectangular' height={187} />
				<MuiSkeleton variant='rectangular' height={14} />
				<MuiSkeleton variant='rectangular' height={56} />
				<MuiSkeleton variant='rectangular' height={24} />
				<SkeletonButtonWrapper>
					<MuiSkeleton variant='rounded' width={120} height={40} />
				</SkeletonButtonWrapper>
			</Stack>
		</ThemeProvider>
	);
};

export default Skeleton;
