import { IProduct } from '../models';

export interface IStore {
	loading: boolean;
	error: string;
	products: IProduct[];
	product: IProduct;
}
