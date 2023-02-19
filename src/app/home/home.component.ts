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
  searchText: string = '';
  constructor(private userService: UserService) {}

  ngOnInit() {
    // check if users data is in local storage
    const usersData = localStorage.getItem('usersData');
    if (usersData) {
      this.users = JSON.parse(usersData);
    } else {
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
        // save users data to local storage
        localStorage.setItem('usersData', JSON.stringify(this.users));
      });
    }

    // check if searched users data is in local storage
    const searchedUsersData = localStorage.getItem('searchedUsersData');
    if (searchedUsersData) {
      this.searchedUsers = JSON.parse(searchedUsersData);
    }
  }

  searchUser(username: string) {
    if (username.trim() !== '') {
      this.userService.getUser(username).subscribe(
        (user) => {
          this.searchedUsers.push(user);
          // save searched users data to local storage
          localStorage.setItem(
            'searchedUsersData',
            JSON.stringify(this.searchedUsers)
          );
          this.searchText = '';
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
      // save searched users data to local storage
      localStorage.setItem(
        'searchedUsersData',
        JSON.stringify(this.searchedUsers)
      );
    }
  }
}
