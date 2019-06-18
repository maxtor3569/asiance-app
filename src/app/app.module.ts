import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about-us/about.module';
import {registerLocaleData} from '@angular/common';
import locale from '@angular/common/locales/ko';
import {LOCALE_ID} from '@angular/core';
registerLocaleData(locale);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CoreModule,
		HomeModule,
		AboutModule

	],
	providers: [
		{provide: LOCALE_ID, useValue: 'ko'}
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
