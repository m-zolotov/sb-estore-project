import { sliceName } from './constants';
import { IStore } from './types';

export const selectIsLoading = (state: { [sliceName]: IStore }): boolean =>
	state[sliceName].loading;

export const selectProducts = (state: {
	[sliceName]: IStore;
}): IStore['products'] => state[sliceName].products;

export const selectProduct = (state: {
	[sliceName]: IStore;
}): IStore['product'] => state[sliceName].product;
