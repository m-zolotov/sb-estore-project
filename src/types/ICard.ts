export interface IAuthor {
	name: string;
	about?: string;
	avatar?: string;
	_id: string;
	email?: string;
	__v: number;
	group?: string;
}

export interface IReview {
	rating: number;
	_id: string;
	text?: string;
	author: IAuthor;
	product: string;
	created_at: string;
	updated_at?: string;
	__v?: number;
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
	author: IAuthor;
	price: number;
	wight?: string;
	description: string;
	created_at: string;
	updated_at?: string;
	__v?: number;
}
