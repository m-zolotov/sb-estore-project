import { ComponentType, FC } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../store/hooks';
import { selectIsLoading } from '../store/products/selectors';

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
