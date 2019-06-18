import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../core/models';
import { environment } from '../../../../environments/environment';
@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() post: Post;

	public post_image_url = environment.endpoint + '/uploads/post/images/';

	constructor() {
	}

	value: number;

	ngOnInit() {
	}

}
