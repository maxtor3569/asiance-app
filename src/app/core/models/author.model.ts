import {Post} from './post.model';

export interface Author {
	id?: number;
	name?: string;
	role?: string;
	avatar?: string;
	location?: string;
	createdAt?: string;
	updatedAt?: string;
	posts?: Post[];
}
