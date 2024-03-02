import { sliceName } from './constants';
import { IStore } from './types';

export const selectIsLoading = (state: { [sliceName]: IStore }): boolean =>
	state[sliceName].loading;

export const selectUser = (state: { [sliceName]: IStore }): IStore['user'] =>
	state[sliceName].user;
