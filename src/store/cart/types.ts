import { IProduct } from '../models';

export type TCartItem = Pick<
	IProduct,
	'_id' | 'name' | 'pictures' | 'stock' | 'price' | 'discount'
> & {
	totalAmount: number;
};

export interface IStore {
	cartItems: TCartItem[] | null;
}
