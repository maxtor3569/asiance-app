import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FooterComponent} from './footer';
import {HeaderComponent} from './header';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {AuthorComponent} from './author/author.component';
import locale from '@angular/common/locales/ko';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatTabsModule,
		RouterModule,
		MatCardModule
	],
	declarations: [
		FooterComponent,
		HeaderComponent,
		PostsComponent,
		PostComponent,
		AuthorComponent
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FooterComponent,
		HeaderComponent,
		PostsComponent,
		PostComponent,
		AuthorComponent
	]
})
export class SharedModule {}
