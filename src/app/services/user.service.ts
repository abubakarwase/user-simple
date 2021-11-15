import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(userId = '') {
    return JSON.parse(localStorage.getItem(userId) || '{}');
  }

  getAllUsers() {
    const items = { ...localStorage };
    let users = []; // getting all entries from local storage
    for (const [key, value] of Object.entries(items)) {
      users.push(JSON.parse(value)); // pushing them into the array for using in a list
    }
    return [...users];
  }

  updateUser(user: User) {
    localStorage.removeItem(user.email);
    localStorage.setItem(user.email, JSON.stringify(user));
    return true;
  }

  createUser(user: User) {
    localStorage.setItem(user.email, JSON.stringify(user));
    return true;
  }

  deleteUser(userId = '') {
    localStorage.removeItem(userId);
    return true;
  }
}
