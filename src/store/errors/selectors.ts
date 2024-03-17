import { sliceName } from './constants';
import { IStore } from './types';

export const selectAlertType = (state: {
	[sliceName]: IStore;
}): IStore['type'] => state[sliceName].type;
export const selectAlertIsOpen = (state: {
	[sliceName]: IStore;
}): IStore['isOpen'] => state[sliceName].isOpen;
export const selectAlertText = (state: {
	[sliceName]: IStore;
}): IStore['text'] => state[sliceName].text;
export const selectCritical = (state: {
	[sliceName]: IStore;
}): IStore['critical'] => state[sliceName].critical;
