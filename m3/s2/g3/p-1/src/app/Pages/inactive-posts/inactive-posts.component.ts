import { Component } from '@angular/core';
import { Post } from 'src/app/Module/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  ArrayActive:Post[] = [];

  constructor(private postService:PostsService)  {
    this.postService.getPosts().then(post => {
    this.ArrayActive = post.filter(post =>  !post.active);
  })}
}
