import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageEvent} from '@angular/material';
import {PostService} from '../core/services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


	public pageEvent;
	public length;
	public pageSize = 5;

	pageSizeOptions: number[] = [5];
	public posts = [];
	constructor(private route: ActivatedRoute, private postService: PostService) {
	}


	ngOnInit() {
		const posts = this.route.snapshot.data.posts;
		this.length = posts.length;
		this.posts = posts.slice(0, this.pageSize);

		console.log('our posts', this.posts);
	}

	public getPosts(event?: PageEvent) {
		this.postService.getPerPage(this.pageSize, event.pageIndex).subscribe( data => {
			this.posts = data;
			window.scroll(0,0);
		});

	}

}
