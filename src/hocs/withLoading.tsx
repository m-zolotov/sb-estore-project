import { ComponentType, FC } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectIsLoading } from '../store/products/selectors';
import { Box, CircularProgress } from '@mui/material';

export const withLoading = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const ReturnedComponent: FC<P> = (props) => {
		const isLoading = useAppSelector(selectIsLoading);

		if (isLoading)
			return (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			);

		return <WrappedComponent {...props} />;
	};
	return ReturnedComponent;
};
