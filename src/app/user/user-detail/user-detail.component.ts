import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';

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

  constructor(private _route: ActivatedRoute, private toastr: ToastrService) {
    this.userId = this._route.snapshot.params['id']; // obtaining user id from the params
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem(this.userId) || '{}');
    if (!user.email) this.toastr.error('No user found, wrong id', 'Error');
    else this.userDetail = user;
  }

  update(user: User) {
    try {
      this.loading = true;
      localStorage.removeItem(user.email);
      localStorage.setItem(user.email, JSON.stringify(user));
      this.toastr.success('User updated successfully');
      this.loading = false;
    } catch (err: any) {
      this.loading = false;
      this.toastr.error('', err.message);
    }
  }
}
