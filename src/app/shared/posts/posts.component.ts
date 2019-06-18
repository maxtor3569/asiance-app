import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../core/models';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	@Input() posts: Post[];

	constructor() {
	}

	value: number;

	ngOnInit() {
	}

}
