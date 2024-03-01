import { IProduct } from '../models';

export interface IStore {
	loading: boolean;
	error: string;
	products: IProduct[];
	product: IProduct;
	// macro: IProduct[];
	// clusterMap: Record<number, IProduct[]>;
}
