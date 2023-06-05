import { CardServiceService } from './../card-service.service';
import { Component } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  likeArray: Card[] = [];

  cardArray: Card[] = [];

  constructor(private cardSvc:CardServiceService){}

  push(card: Card): void {
    this.likeArray.push(card);
  }

  ngOnInit(): void {

      this.cardSvc.get().subscribe(res => {
      console.log(res.filter(card => card.id <= 30));
      this.cardArray = res.filter(card => card.id <= 30)
    }
  )
}


  remove(card: Card){
    this.cardArray.splice(this.cardArray.indexOf(card), 1);
  }


}

