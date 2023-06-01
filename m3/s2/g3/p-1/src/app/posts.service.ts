import { Injectable } from '@angular/core';
import { Post } from './Module/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  apiUrl:string = 'assets/db.json';

  getPosts ():Promise<Post[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }
}
