import {Author} from './author.model';

export interface User {
	id?: number;
	author?: Author;
	createdAt?: string;
	token: string;

}
