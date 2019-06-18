import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {UserService} from './user.service';
import {map, take} from 'rxjs/operators';

// https://stackoverflow.com/questions/39190427/angular2-resolve-before-canactivate
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private userService: UserService
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {

		// return this.userService.isAuthenticated;
		return this.userService.isAuthenticated.pipe(take(1), map(isAuth => {
			if (isAuth) {
				// console.log('Pass the guard');
				return true;
			} else {
				this.router.navigate(['login']);
				return false;
			}
		}));


	}
}
