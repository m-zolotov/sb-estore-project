import { sliceName } from './constants';
import { IStore } from './types';

export const selectCritical = (state: {
	[sliceName]: IStore;
}): IStore['critical'] => state[sliceName].critical;

export const selectErrors = (state: { [sliceName]: IStore }): IStore['list'] =>
	state[sliceName].list;
