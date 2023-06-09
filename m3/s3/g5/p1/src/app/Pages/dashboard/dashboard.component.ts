import { Component } from '@angular/core';
import { User } from '../auth/interfaces/user';
import { UserService } from './user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  usersArray: User[] = [];

  constructor(
    private userSvc: UserService
    ){}

    ngOnInit(){
      this.userSvc.get().subscribe(current => this.usersArray = current )
    }

    deleteUser(user: User): void {
      this.userSvc.delete(user.id).subscribe(
        response => {
          console.log(response);
          const index = this.usersArray.findIndex(u => u.id === user.id);
          if (index !== -1) {
            this.usersArray.splice(index, 1);
          }
        },
        error => {
          console.log(error);
        }
      );
    }

    cancia(email: string): void {
      const newEmail = prompt('Enter the new email:');
      if (newEmail) {
        const userToUpdate = this.usersArray.find(u => u.email === email);
        if (userToUpdate) {
          userToUpdate.email = newEmail;
          this.userSvc.put(userToUpdate).subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    }

}
