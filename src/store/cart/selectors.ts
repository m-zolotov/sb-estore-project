import { sliceName } from './constants';
import { IStore } from './types';

export const selectCartItems = (state: {
	[sliceName]: IStore;
}): IStore['cartItems'] => state[sliceName].cartItems;
