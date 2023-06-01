import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Module/post';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})


export class InactivePostComponent {


ArrayActivePost: Post[] = []

  constructor(public PostSvc: PostService) {

      this.ArrayActivePost = this.PostSvc.getPosts(false)
}
}
