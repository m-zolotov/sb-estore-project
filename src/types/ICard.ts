export interface ICard {
	discount: number;
	stock: number;
	available: boolean;
	pictures: string;
	likes: string[];
	tags: string[];
	isPublished: boolean;
	_id: string;
	name: string;
	author: {
		name: string;
		about: string;
		avatar: string;
		_id: string;
		email: string;
		__v: number;
	};
	price: number;
	wight: string;
	description: string;
	created_at: string;
	updated_at: string;
	__v: number;
}
