import { Component, OnInit } from '@angular/core';
import * as Enumerable from 'linq';

import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser: User;
  users: User[] = [
    { id: 1, login: 'gabi89@o2.pl', name: 'Gabriel Hampton' },
    { id: 2, login: 'moski_kiski@tlen.pl', name: 'Moses Massey' },
    { id: 3, login: 'perl-harbor12@wp.pl', name: 'Pearl Ramirez' },
    { id: 4, login: 'marek@marek.com', name: 'Mark Walsh' },
    { id: 5, login: 'micz-z-mody-na-sukcez@aaa.pl', name: 'Mitchell Carter' }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: User) {
    if (this.selectedUser && user.id === this.selectedUser.id) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
  addUserHandle(user: User) {
    user.id = Enumerable.from(this.users).max(item => item.id) + 1;
    this.users.push(user);
  }
}
