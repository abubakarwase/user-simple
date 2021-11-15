import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userDetail: User = {
    username: '',
    email: '',
    password: '',
  };
  userId: string;
  isFormSubmitted: Boolean = false;
  loading: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private toastr: ToastrService,
    private UserService: UserService
  ) {
    this.userId = this._route.snapshot.params['id']; // obtaining user id from the params
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let user: User = this.UserService.getUser(this.userId);
    if (!user.email) this.toastr.error('No user found, wrong id', 'Error');
    else this.userDetail = user;
  }

  update(user: User) {
    try {
      this.loading = true;
      this.UserService.updateUser(user);
      this.toastr.success('User updated successfully');
      this.loading = false;
    } catch (err: any) {
      this.loading = false;
      this.toastr.error('', err.message);
    }
  }
}
