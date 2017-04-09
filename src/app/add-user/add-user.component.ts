import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  login: string;
  name: string;

  @Output() addUserHandler = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.clearUserData();
  }

  clearUserData() {
    this.login = undefined;
    this.name = undefined;
  }
}
