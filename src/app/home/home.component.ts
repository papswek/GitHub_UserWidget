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
          console.log('Error fetching user data:', error);
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

  // searchUser(username: string) {
  //   if (username.trim() === '') {
  //     this.searchedUser = null;
  //   } else {
  //     this.userService.getUser(username).subscribe((user) => {
  //       this.searchedUser = user;
  //       this.avatar = user.avatar_url;
  //       this.name = user.name;
  //       this.login = user.login;
  //       this.company = user.company;
  //       this.followers = user.followers;
  //       this.publicRepos = user.public_repos;
  //     });
  //   }
  // }
}
