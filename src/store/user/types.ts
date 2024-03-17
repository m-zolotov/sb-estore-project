import { IUser } from '../models';

export interface IStore {
	loading: boolean;
	error: string;
	user: IUser;
}
