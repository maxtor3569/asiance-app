import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {take} from 'rxjs/operators';
import {PostService} from '../core/services';
import {Post} from '../core/models';

@Injectable()
export class HomeResolver implements Resolve<Post[]> {
	constructor(
		private router: Router,
		private postService: PostService
	) {
	}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Post[]> {



		return this.postService.getAll();

	}
}
