import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from './api.service';
import {map} from 'rxjs/operators';
import {Author, Post} from '../models';

@Injectable()
export class AuthorService {
	constructor(
		private apiService: ApiService
	) {
	}

	getByUri(uri): Observable<Author> {
		const id = uri.split('/')[3];
		return this.apiService.get('/authors/' + id)
			.pipe(map(data => {
				// console.log('Author', data);
				return data;
			}));
	}



}
