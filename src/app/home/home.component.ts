import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users;
  searchedUsers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  searchUser(username: string) {
    if (username.trim() !== '') {
      this.userService.getUser(username).subscribe(
        (user) => {
          this.searchedUsers.push(user);
        },
        (error) => {
          alert('User not found');
        }
      );
    }
  }

  removeUser(user: any) {
    const index = this.searchedUsers.indexOf(user);
    if (index > -1) {
      this.searchedUsers.splice(index, 1);
    }
  }
}
