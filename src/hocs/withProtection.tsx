import { ComponentType, FC, useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectAccessToken } from '../store/user/selectors';
import { useLocation, useNavigate } from 'react-router-dom';

export const withProtection = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const ReturnedComponent: FC<P> = (props) => {
		const accessToken = useAppSelector(selectAccessToken);
		const navigate = useNavigate();
		const location = useLocation();

		useEffect(() => {
			if (
				!accessToken &&
				location.pathname !== '/signin' &&
				location.pathname !== '/signup'
			)
				navigate('/signin', { state: location.pathname });
		}, [accessToken, navigate, location]);

		return <WrappedComponent {...props} />;
	};
	return ReturnedComponent;
};
