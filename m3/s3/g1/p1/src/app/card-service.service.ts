import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }


  get(){
    return this.http.get<Card[]>(this.apiUrl);
  }

}
