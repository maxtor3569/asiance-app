import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AboutComponent} from './about.component';
import {SharedModule} from '../shared';
import {AboutRoutingModule} from './about-routing.module';

@NgModule({
	imports: [
		SharedModule,
		AboutRoutingModule
	],
	declarations: [
		AboutComponent
	],
	providers: [
	]
})
export class AboutModule {
}
