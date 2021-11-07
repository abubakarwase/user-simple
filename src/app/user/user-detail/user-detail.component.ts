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
    this.userId = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userDetail = JSON.parse(localStorage.getItem(this.userId) || '{}');
  }

  update(user: User) {
    try {
      this.loading = true;
      // const { username, email, password } = user;
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
