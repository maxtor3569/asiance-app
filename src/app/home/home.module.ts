import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeResolver} from './home-resolver.service';
import {MatPaginatorModule} from '@angular/material';

@NgModule({
	imports: [
		SharedModule,
		HomeRoutingModule,
		MatPaginatorModule
	],
	declarations: [
		HomeComponent
	],
	providers: [
		HomeResolver
	]
})
export class HomeModule {
}
