import {Author} from './author.model';

export interface Post {
	id?: number;
	author?: Author;
	body?: string;
	title?: string;
	image?: string;
	tags?: string;
	createdAt?: string;
	updatedAt?: string;
}
