import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from './api.service';
import {map} from 'rxjs/operators';
import {Post} from '../models';

@Injectable()
export class PostService {
	constructor(
		private apiService: ApiService
	) {
	}

	getAll(): Observable<[Post]> {
		return this.apiService.get('/posts' )
			.pipe(map(data => data));
	}


	getPerPage(nbItems = 5, page = 0): Observable<[Post]> {
		return this.apiService.get('/posts?page=' + page + '&itemsPerPage=' + nbItems )
			.pipe(map(data => data));
	}



}
