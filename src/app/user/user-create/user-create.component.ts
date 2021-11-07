import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  async submitted(userDetail: User) {
    try {
      const isFound = localStorage.getItem(userDetail.email);
      if (isFound) {
        return this.toastr.error('This user already exists', 'Error');
      }
      localStorage.setItem(userDetail.email, JSON.stringify(userDetail));
      this.router.navigate(['/']);
      return this.toastr.success('User created successfully');
    } catch (err: any) {
      return this.toastr.error(err.message, 'Error');
    }
  }
}
