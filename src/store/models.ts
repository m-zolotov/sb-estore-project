export interface IAsyncError {
	name?: string;
	message?: string;
	code?: string;
	stack?: string;
}

export interface IUser {
	name: string;
	about?: string;
	avatar?: string;
	email?: string;
	password?: string; // ?
	isAdmin?: boolean; // ?
	group?: string;
	token?: string;
	_id: string;
}

export interface IProduct {
	discount: number;
	stock: number;
	available?: boolean;
	pictures: string;
	likes: string[];
	reviews: IReview[];
	tags: string[];
	isPublished: boolean;
	_id: string;
	name: string;
	author: IUser;
	price: number;
	wight?: string;
	description: string;
	created_at: string;
	updated_at?: string;
	__v?: number;
}

export interface IComment {
	text: string;
	author: IUser;
	post: string;
	_id: string;
	updated_at: string;
	created_at: string;
}

export interface IReview {
	name?: string; //?
	city?: string; //?
	text?: string;
	rating: number; //?
	author: IUser; //?
	product: string; //?
	_id: string;
	updated_at?: string;
	created_at?: string; // ?
}

export interface IPost {
	title: string;
	image: string;
	text: string;
	tags: string[];
	isPublished: boolean;
	author: IUser;
	likes: IUser[];
	comments: IComment[];
	_id: string;
	group: string;
	updated_at: string;
	created_at: string;
}

export interface ICard {
	discount: number;
	stock: number;
	available?: boolean;
	pictures: string;
	likes: string[];
	reviews: IReview[];
	tags: string[];
	isPublished: boolean;
	_id: string;
	name: string;
	author: IUser;
	price: number;
	wight?: string;
	description: string;
	created_at: string;
	updated_at?: string;
	__v?: number;
}

// export interface IProduct {
// 	name: string;
// 	price: number;
// 	discount: number;
// 	stock: number;
// 	available: boolean;
// 	wight: string;
// 	description: string;
// 	pictures: string;
// 	tags: string[];
// 	isPublished: boolean;
// 	author: IUser;
// 	likes: IUser[];
// 	reviews: IReview[];
// 	_id: string;
// 	updated_at: string;
// 	created_at: string;
// }

export interface IError {
	data: Partial<Error>;
	isCritical?: boolean;
	text: string;
	type?: string;
}
