import { Component } from '@angular/core';
import { Post } from 'src/app/Module/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})


export class ActivePostsComponent {

ArrayActive:Post[] = [];

constructor(private postService:PostsService)  {
  this.postService.getPosts().then(post => {
  this.ArrayActive = post.filter(post =>  post.active);
})}

}



