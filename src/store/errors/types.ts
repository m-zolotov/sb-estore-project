import { AlertColor } from '@mui/material';

export interface IStore {
	type: AlertColor;
	text: string;
	isOpen: boolean;
	critical?: boolean;
}
