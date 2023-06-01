import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Module/post';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})

export class ActivePostComponent {


ArrayActivePost: Post[] = []

  constructor(public PostSvc: PostService) {

      this.ArrayActivePost = this.PostSvc.getPosts(true)

}};
