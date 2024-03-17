import { IUser } from '../models';

export interface IUserAuthResponse {
	data: IUser;
	token: string;
}
