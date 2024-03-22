import { FC } from 'react';
import { Alert as AlertLib } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useAppSelector } from '../../../store/hooks';
import {
	selectAlertType,
	selectAlertIsOpen,
	selectAlertText,
} from '../../../store/errors/selectors';

export const Alert: FC = () => {
	const type = useAppSelector(selectAlertType);
	const isOpen = useAppSelector(selectAlertIsOpen);
	const text = useAppSelector(selectAlertText);

	return (
		<Snackbar open={isOpen} autoHideDuration={4000}>
			<AlertLib severity={type}>{text}</AlertLib>
		</Snackbar>
	);
};

export default Alert;
