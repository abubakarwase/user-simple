import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private UserService: UserService
  ) {}

  ngOnInit() {}

  submitted(userDetail: User) {
    try {
      // keeping the emails unique
      const isFound = this.UserService.getUser(userDetail.email);
      if (isFound.email) {
        return this.toastr.error('This user already exists', 'Error');
      }
      this.UserService.createUser(userDetail);
      this.router.navigate(['/']);
      return this.toastr.success('User created successfully');
    } catch (err: any) {
      return this.toastr.error(err.message, 'Error');
    }
  }
}
