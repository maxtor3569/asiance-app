import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {AuthGuard} from '../core/services';

const routes: Routes = [
	{
		path: 'about-us',
		component: AboutComponent,
		// canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutRoutingModule {
}
