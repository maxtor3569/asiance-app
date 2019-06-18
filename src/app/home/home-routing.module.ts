import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeResolver} from './home-resolver.service';
import {AuthGuard} from '../core/services';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		resolve: {
			posts: HomeResolver
		}
		// canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {
}
