import { Component, OnInit } from '@angular/core';
import { PostService } from '../providers/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[] = [];
  constructor(private postService: PostService ) {}
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
