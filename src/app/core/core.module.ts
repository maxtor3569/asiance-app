import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	ApiService,
	AuthGuard, AuthorService,
	JwtService, PostService,
	UserService,
} from './services';

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
		ApiService,
		AuthGuard,
		JwtService,
		UserService,
		PostService,
		AuthorService

	],
	declarations: []
})
export class CoreModule {
}
