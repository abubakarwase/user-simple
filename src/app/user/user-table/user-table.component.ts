import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { confirmCancelButton } from 'src/app/utils/sweet-alerts';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: Array<User> = [];

  constructor(
    private toastr: ToastrService,
    private UserService: UserService
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = this.UserService.getAllUsers();
  }

  async deleteUser(email: string) {
    try {
      let response = await confirmCancelButton(); // wait for the response from modal
      if (response === true) {
        this.UserService.deleteUser(email);
        this.users = []; // flushing the user list
        this.getAllUsers(); // loading updated users in the list
        return this.toastr.success('User deleted');
      }
      return;
    } catch (err: any) {
      return this.toastr.error(err.message, 'Error');
    }
  }
}
