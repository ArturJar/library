import { Injectable } from '@angular/core';
import * as Enumerable from 'linq';

import { User } from './user';
import { USERS } from './user.mock';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
  }

  create(login: string, name: string) {

  }
}
