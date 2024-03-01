import { IError } from '../models';

export interface IStore {
	critical: IError | null;
	list: IError[];
}
