import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthorService, PostService} from '../../core/services';
import {Author, Post} from '../../core/models';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-author',
	templateUrl: './author.component.html',
	styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

	@Input() authorUri: string;

	public author: Author;
	public avatar_endpoint = environment.endpoint + '/uploads/author/avatars/';

	constructor(
		private authorService: AuthorService

	) {
	}

	value: number;

	ngOnInit() {
		if (this.authorUri) {
			console.log(this.authorUri);
			this.authorService.getByUri(this.authorUri).subscribe(data => {
				this.author = data;
			});
		}
	}

}
