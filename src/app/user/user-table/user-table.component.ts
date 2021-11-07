import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';
import { confirmCancelButton } from 'src/app/utils/sweet-alerts';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: Array<User> = [];

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    const items = { ...localStorage };
    for (const [key, value] of Object.entries(items)) {
      this.users.push(JSON.parse(value));
    }
  }

  async deleteUser(email: string) {
    try {
      let response = await confirmCancelButton();
      if (response === true) {
        localStorage.removeItem(email);
        this.users = [];
        this.getAllUsers();
        return this.toastr.success('User deleted');
      }
      return;
    } catch (err: any) {
      return this.toastr.error(err.message, 'Error');
    }
  }
}
